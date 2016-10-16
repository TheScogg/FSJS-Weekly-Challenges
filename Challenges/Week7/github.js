https = require('https');


function getRepos(username){
  var options = {
    hostname: "api.github.com",
    path: "/users/" + username + "/repos",
    headers: {'User-Agent': 'TheScogg'}
  };

  https.get(options, function (response) {
    var str = "";

    response.on('data', function(chunk) {
      str += chunk;
    });

    response.on('end', function () {
      var repos = (JSON.parse(str));
      
      for (repo in repos) {
        console.log(repos[repo].name + ":" + repos[repo].description);
      }
    })
  });
}


//Task 1
module.exports.getRepos = getRepos;