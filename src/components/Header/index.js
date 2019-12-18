import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Logo, MyPokedex, Profile, Button } from './styles';

import logo from '../../assets/logo.png';
import pokedex from '../../assets/pokedex.png';

import { logout } from '../../store/modules/auth/actions';

export default function Header() {
  const user = useSelector(state => state.user.user);

  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
  }

  return (
    <Container>
      <Logo to="/">
        <img src={logo} alt="Pokedex" width="50px" />
        <strong>Pokedex</strong>
      </Logo>

      <div>
        <MyPokedex to="/my-pokedex">
          <img src={pokedex} alt="MyPokedex" width="30px" />
          <span>Minha Pokedex</span>
        </MyPokedex>

        <Profile>
          <div>
            <strong>{user.name}</strong>
            <Button type="button" onClick={logoutUser}>
              Sair
            </Button>
          </div>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f4fc0b32171769.5671d9c884044.png"
            width="60px"
            alt="pokemon-trainer"
          />
        </Profile>
      </div>
    </Container>
  );
}
