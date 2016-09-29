/**
 * Created by Chris on 9/28/2016.
 */
var uri = "https://pokeapi.co/api/v2/pokemon/?offset=";
var offset = 0;

function getPokemon(clickEvent,offset) {
    //Create JSON Object from PokeAPI
    $.getJSON(uri + offset, function (data) {
        //Global variable to store data.next & data.previous, to be referenced against in button click event
        next = data.next; //AAAAA
        previous = data.previous;

        //Stop next button from being pushed if data.next doesn't return a true value
        if (data.next) {
            $("#pokemon").html("");

            for (var i = 0; i < data.results.length; i++) {
                name = (data.results[i].name);
                //console.log(name);
                addPokemon(name)
            }
        }

    })}


function addPokemon(name) {
    //console.log("Hello");
    $("#pokemon").append('<li class="poke-card"> <h3 class="name">' + name + '</h3></li>');
}

$("button").click('on', function (button) {
    if (button.target.id === "next") {


        if (next !== null) {
            offset += 20;
            getPokemon("Next",offset);
        }

        } else // if (button.target.id ==="previous" {
        if (previous !== null) {
            offset -= 20;
            getPokemon("Previous", offset);
        }

    }
});

getPokemon();

// 1.)  Use the PokéAPI from http://pokeapi.co along with jQuery's getJSON function to retrieve the first 20 Pokémon.
// 1.1)  Use the addPokemon function to show each of the Pokémon names that were retrieved.
//Hint: Learn how to access resources via the documentation http://pokeapi.co/docsv2/#resource-lists


// 2.)  Use jQuery to create a click handler for the next and previous buttons.
// 2.1) Use the "next" and "previous" properties of the pokemon resource object to get the next or previous list of Pokémon.
// 2.2) When a user clicks next or previous, remove all existing Pokémon from the ul element and add the new list of Pokémon.
// 2.3) Use jQuery to disable the next/previous buttons if there are no more Pokémon to retrieve in that direction.

/*  Super Awesome Bonus!
 When you click on a Pokémon name, hide all the names and show a larger card that contains details about that Pokémon such as their sprite (picture), name,
 type or anything else you would like to include.  Add a way to go back to the list when your're done looking at the detail.
 Be creative, you can style/arrange the detail information however you like!
 */