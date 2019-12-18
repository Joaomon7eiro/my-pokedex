import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { loginRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.png';
import Loading from '../../components/Loading';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Email Inválido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(loginRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Pokedex" width="100px" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">{loading ? <Loading /> : 'Entrar'} </button>
        <Link to="/register">Quero ser um Treinador</Link>
      </Form>
    </>
  );
}
