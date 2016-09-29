/**
 * Created by Chris on 9/28/2016.
 */
$(document).ready(function () {
    //URL of Pokemon API
    var uri = "https://pokeapi.co/api/v2/pokemon/?offset=";
    //Offset value to be passed into getPokemon function, to set query string
    var offset = 0;

    function getPokemon(offset) {
        //Create JSON Object from PokeAPI
        $.getJSON(uri + offset, function (data) {
            //Global variables to store data.next & data.previous, to be referenced against in button click event
            next = data.next;
            previous = data.previous;

            //Clears Pokemon cards from screen prior to adding next set of 20 pokemon
            $("#pokemon").html("");

            //Send JSON data to addPokemon function
            addPokemon(data);
        })}


    function addPokemon(data) {
        //Iterate through JSON data object and populate data.results[i] in #pokemon
        for (var i = 0; i < data.results.length; i++) {
            name = (data.results[i].name);
            //console.log(name);
            $("#pokemon").append('<li class="poke-card"> <h3 class="name">' + name + '</h3></li>');
        }
    }

    $("button").click('on', function () {
            console.log(this);
            if (this.id === "next") {

                //Checks to make sure data.next or data.previous have values prior to proceeding with click event.
                if (next !== null) {
                    //Iterate offset by 20 to be refed into getPokemon function for query string
                    offset += 20;
                    getPokemon(offset);
                }

            } else // if (this.id ==="previous" {
            if (previous !== null) {
                offset -= 20;
                getPokemon(offset);
            }
        }
    );

    getPokemon();

    $("#pokemon").on("click", ".poke-card", function() {
        console.log("CARD CLICKED");
        //$("#pokemon").hide();
    } );
});


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