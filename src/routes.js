import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Pokemon from './pages/Pokemon';
import MyPokedex from './pages/Pokedex';
import MyPokedexPokemon from './pages/PokedexPokemon';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/pokemon/:id" exact component={Pokemon} />
      <Route path="/my-pokedex" exact component={MyPokedex} />
      <Route path="/my-pokedex/:id" exact component={MyPokedexPokemon} />
    </Switch>
  );
}
