/*let pokemonList = [];
pokemonList = [
  {
    name: "Bulbasaur",
    height: 0.7,
    types: ["grass", "poison"],
  },
  {
    name: "Charmander",
    height: 1.7,
    types: ["fire", "speed"],
  },
  {
    name: "Squirtle",
    height: 0.5,
    types: ["water", "speed"],
  },
];
//crating a loop that writes pokemon attributes
for (let i = 0; i < pokemonList.length; i++) {
  document.write(
    pokemonList[i].name +
      " " +
      " height " +
      pokemonList[i].height +
      " " +
      " types " +
      pokemonList[i].types +
      " " +
      "<br>" +
      "<br>"
  );
}

//New loop with conditional
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 1) {
    document.write(pokemonList[i].name + " wow that is Big" + "<br>");
  }
}

//forEach loop
pokemonList.forEach(function (name) {
  document.write(
    name.name +
      " " +
      "height: " +
      name.height +
      " " +
      " types: " +
      name.types +
      "<br>"
  );
});*/

//IIFE applied
/*(function () {
  let pokemonList = [
    {
      name: "Bulbasaur",
      height: 0.7,
      types: ["grass", "poison"],
    },
    {
      name: "Charmander",
      height: 1.7,
      types: ["fire", "speed"],
    },
    {
      name: "Squirtle",
      height: 0.5,
      types: ["water", "speed"],
    },
  ];
})();*/
//assigning IIFE to variable
let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "Bulbasaur",
      height: 0.7,
      types: ["grass", "poison"],
    },
    {
      name: "Charmander",
      height: 1.7,
      types: ["fire", "speed"],
    },
    {
      name: "Squirtle",
      height: 0.5,
      types: ["water", "speed"],
    },
  ];

  function showDetails(pokemon) {
    console.log(pokemon.name);
  }

  return {
    add: function (pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function () {
      return pokemonList;
    },
    addListItem: function (pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listItem = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      listItem.appendChild(button);
      pokemonList.appendChild(listItem);
      button.addEventListener("click", function (event) {
        showDetails(pokemon);
      });
    },
  };
})();

/*pokemonRepository.getAll().forEach(function (pokemon) {
  document.write("<p>" + "Name: " + pokemon.name + "</p>");
  document.write("<p>" + "Height: " + pokemon.height + "</p>");
  document.write("<p>" + "Types: " + pokemon.types + "</p>");
  pokemonRepository.addListItem(pokemon);
});*/

//Manipulating the DOM
/*pokemonRepository.getAll().forEach(function (pokemon) {
  let pokemonList = document.querySelector(".pokemon-list");
  let listItem = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listItem.appendChild(button);
  pokemonList.appendChild(listItem);
});*/

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
