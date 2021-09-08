import React, { useEffect } from 'react';
import { ButtoBackToHome } from '../backToHome/ButtonBackToHome';
import { useSelector, useDispatch } from 'react-redux';
import { obtenerEstadisticaPokemonAsync, selectPokemonStat } from '../listPokemons/listPokemonsSlice';

export function Stat(props) {

    const dispatch = useDispatch();
    const { statName } = props.match.params;

    useEffect(() => { 
        dispatch(obtenerEstadisticaPokemonAsync(statName));
    }, [dispatch, statName])
     
    const pokemonStat = useSelector(selectPokemonStat) || {is_battle_only: false};
    console.log(pokemonStat)
    
    return (
        <div>
            <ButtoBackToHome />
            <h1>{pokemonStat?.name}</h1>
            <p>
                Es solo batalla? 
                <input type="radio" checked={pokemonStat.is_battle_only} disabled />
            </p>
            { 
                pokemonStat?.affecting_moves?.decrease?.map(
                (decrease, index) => (
                    <div key={index} >
                           <p>Longitud de decrecimiento </p>
                    </div>
                )
                )
            }
            { 
                pokemonStat?.affecting_moves?.increase?.map(
                (increase, index) => (
                    <div key={index} >
                           <p>Longitud de increcimiento</p>
                    </div>
                )
                )
            }
        </div>
    )
    
}