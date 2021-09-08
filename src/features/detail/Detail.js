import React, { useEffect } from 'react';
import { ButtoBackToHome } from '../backToHome/ButtonBackToHome';
import { useSelector, useDispatch } from 'react-redux';
import { obtenerDetallePokemonAsync, selectPokemonDetail } from '../listPokemons/listPokemonsSlice';
import { Link } from 'react-router-dom';
import styles from '../listPokemons/ListPokemons.module.css';

export function Detail(props) {

    const dispatch = useDispatch();
    const { name } = props.match.params;

    useEffect(() => { 
        dispatch(obtenerDetallePokemonAsync(name));
    }, [dispatch, name])
     
    const pokemonDetail = useSelector(selectPokemonDetail);
    console.log(pokemonDetail)
    
    return (
        <div className={styles.backGroundDetail}>
            <ButtoBackToHome />
                <h1>{pokemonDetail.name}</h1>
                <div className={styles.espaceBetween}>
                    { 
                        pokemonDetail?.stats?.map(
                        (stat, index) => (
                            <div className={styles.card}>
                            <div className={styles.container} key={index} >
                                <p>Estadisticas base { stat.base_stat }</p>
                                <p>Esfuerzo { stat.effort }</p>
                                <Link to={`/stat/${stat.stat.name}`}>
                                    Estadistica { stat.stat.name }
                                </Link>
                            </div>
                            </div>
                        )
                        )
                    }
                </div>
        </div>
    )
    
}