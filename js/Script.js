
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

  /*function add(pokemon) {
    if (
     Object.prototype.toString.call(pokemon) === "[object Object]" &&
     Object.keys(pokemon).length === 3
   ) {
     repository.push(pokemon);
   } else {
     return "Invaid Entry";
   }
 }

pokemonrepository.add({
  name: "Charizard",
  moves: ["Flames"],
  height: 1, rank:25
});*/

//Function to add list for each pokemon object
function addListItem(pokemon) {
  var $pokemonList = document.querySelector("ul");
  var $listItem = document.createElement("li");
  var $button = document.createElement("button");

  $button.innerText = pokemon.name;
  $button.classList.add("list-button");
  $pokemonList.appendChild($listItem);
  $listItem.appendChild($button)
  addListener($button, pokemon);
}

function addListener(button, pokemon) {
  button.addEventListener("click", () => {
    showDetails(pokemon);
  });
}

function showDetails(pokemon) {
  console.log(pokemon);
}

function getAll() {
  return repository;
}

return {
  addListItem: addListItem,
  getAll: getAll
};
})();


pokemonrepository.getAll().forEach(pokemon => {
pokemonrepository.addListItem(pokemon);
});
