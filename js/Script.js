
var pokemonrepository = (function () {
  var repository = [
    { name: "Bulbasaur",
      moves:['poisonpowder','leechseed'],
      height:1,rank:1
    },
    { name: "Jigglypuff",
      moves: ['sing','quiverattack'],
      height:1, rank:39
    },
    { name: "Pikachu",
      moves: ['electricshock','thundervolt'],
      height:1, rank:25
    },
    { name:"Bayleef",
      moves:['rasorleaf','quiverattack'],
      height:1, rank:153
    },
    { name:"Butterfree",
      moves:['confusion','whirlwind'],
      height:1, rank:12
    },
    { name:"Charmander",
      moves:['fireball','inferno'],
      height:4, rank:4
    },
    { name:"Squirtel",
      moves:['waterspray','watercyclone'],
      height:1, rank:6
    }
  ];

  function add(pokemon) {
    if (
     Object.prototype.toString.call(pokemon) === "[object Object]" &&
     Object.keys(pokemon).length === 3
   ) {
     repository.push(pokemon);
   } else {
     return "Invaid Entry";
   }
 }


  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonrepository.add({
  name: "Charizard",
  moves: ["Flames"],
  height: 1, rank:25
});

pokemonrepository.getAll().forEach(function(currentPokemon) {
  var pokemon = document.createElement("div");

  var pokemonTitle = document.createElement("h1");
  if (currentPokemon.height > 3) {
    pokemonTitle.textContent =
      currentPokemon.name +
      " (height: " +
      currentPokemon.height +
      ") " +
      "- Wow, that's big! ')";
    pokemon.setAttribute("class", "grid_item_darken");
  } else {
    pokemonTitle.textContent =
      currentPokemon.name + " (height: " + currentPokemon.height + ")";
    pokemon.setAttribute("class", "grid__item");
  }

  document.getElementById("pokemon-container").appendChild(pokemon);
  pokemon.appendChild(pokemonTitle);
});
