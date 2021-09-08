import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import logo from './logo.svg';
import { ListPokemons } from './features/listPokemons/ListPokemons';
import './App.css';
import { NotFound } from './features/pageNoFound/NoFound';
import { Detail } from './features/detail/Detail';
import { Stat } from './features/statPokemon/Stat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path='/' component={ListPokemons} />
          <Route path='/detail/:name' component={Detail} />
          <Route path='/stat/:statName' component={Stat} />
          <Route component={NotFound} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
