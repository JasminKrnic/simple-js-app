let pokemonRepository = (function () {
  let t = [];
  function e(t) {
    l(t).then(function () {
      n(t);
    });
  }
  function n(t) {
    document.querySelector(".modal-title").innerText = t.name;
    document.querySelector(".pokemon-image").src = t.imageUrl;
    document.querySelector(".pokemon-height").innerText =
      "Height: " + t.height / 10 + "m";
  }
  function o(e) {
    t.push(e);
  }
  function i() {
    return t;
  }
  function l(t) {
    return fetch(t.detailsUrl)
      .then(function (t) {
        return t.json();
      })
      .then(function (e) {
        (t.imageUrl = e.sprites.front_default),
          (t.height = e.height),
          (t.types = e.types);
      })
      .catch(function (t) {
        console.log(t);
      });
  }
  return {
    add: o,
    getAll: i,
    addListItem: function t(n) {
      let o = document.querySelector(".pokemon-list");
      o.classList.add("list-group");
      let i = document.createElement("li");
      i.classList.add("list-group-item");
      let l = document.createElement("button");
      l.classList.add("btn-block"),
        l.classList.add("btn-lg"),
        l.classList.add("btn-primary"),
        l.setAttribute("data-toggle", "modal"),
        l.setAttribute("data-target", "#exampleModal"),
        (l.innerText = n.name),
        l.classList.add("pokemonButton"),
        i.appendChild(l),
        o.appendChild(i),
        l.addEventListener("click", function () {
          e(n);
        });
    },
    showDetails: e,
    loadList: function t() {
      return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
        .then(function (t) {
          return t.json();
        })
        .then(function (t) {
          t.results.forEach(function (t) {
            o({ name: t.name, detailsUrl: t.url });
          });
        })
        .catch(function (t) {
          console.log(t);
        });
    },
    loadDetails: l,
    showModal: n,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (t) {
    pokemonRepository.addListItem(t);
  });
});
