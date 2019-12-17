import React from 'react';

import { Container, Logo, MyPokedex } from './styles';

import logo from '../../assets/logo.png';
import pokedex from '../../assets/pokedex.png';

export default function Header() {
  return (
    <Container>
      <Logo to="/">
        <img src={logo} alt="Pokedex" size="200px" />
        <strong>Pokedex</strong>
      </Logo>

      <MyPokedex to="/my-pokedex">
        <img src={pokedex} alt="MyPokedex" />
        <span>Minha Pokedex</span>
      </MyPokedex>
    </Container>
  );
}
