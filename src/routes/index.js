import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main';
import Pokemon from '../pages/Pokemon';
import MyPokedex from '../pages/Pokedex';
import MyPokedexPokemon from '../pages/PokedexPokemon';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={SignUp} />

      <Route path="/pokemon" exact component={Main} isPrivate />
      <Route path="/pokemon/:id" component={Pokemon} isPrivate />

      <Route path="/my-pokedex" exact component={MyPokedex} isPrivate />
      <Route path="/my-pokedex/:id" component={MyPokedexPokemon} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
