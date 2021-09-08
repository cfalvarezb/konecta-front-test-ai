import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  obtenerListaPokemonsAsync,
  selectListPokemons
} from './listPokemonsSlice';
import { Link } from 'react-router-dom';

export function ListPokemons() {
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(obtenerListaPokemonsAsync());
  }, [dispatch])

  const listaPokemons = useSelector(selectListPokemons);
  console.log(listaPokemons)

  return (
    <div style={{backgroundColor: "#00FFFF", width: "100%"}}>
      <h1>Lista de Pokemons</h1>
      { 
        listaPokemons?.results?.map(
          (pokemon, index) => (
              <div key={index} >
                  <Link to={`/detail/${pokemon.name}`}>
                    { pokemon.name }
                  </Link>
              </div>
          )
        )
      }
      
    </div>
  );
}
