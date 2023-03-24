let pokemonList = [];
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
});

//IIFE applied
(function () {
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
})();
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
  return {
    add: function (pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function () {
      return pokemonList;
    },
  };
})();
