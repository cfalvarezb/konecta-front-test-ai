import Pokedex from 'pokedex-promise-v2'

export function fetchPokemonsList() {
  return new Promise((resolve) =>
    setTimeout(() => {
      var interval = {
        limit: 50,
        offset: 10
      }
      let P = new Pokedex();
      P.getPokemonsList(interval)
        .then(function(response) {
          resolve({ data: response })
        })
    }, 500)
  );
}

export function fetchPokemonDetail(name) {
  return new Promise((resolve) =>
    setTimeout(() => {
      let P = new Pokedex();
      P.getPokemonByName(name) // with Promise
        .then(function(response) {
          resolve({ data: response })
        })
        .catch(function(error) {
          resolve({ data: error })
        });

    }, 500)
  );
}

export function fetchPokemonStat(statName) {
  return new Promise((resolve) =>
    setTimeout(() => {
      let P = new Pokedex();

      P.getStatByName(statName)
        .then(function(response) {
          resolve({ data: response })
        })
        .catch(function(error) {
          resolve({ data: error })
        });

    }, 500)
  );
}
