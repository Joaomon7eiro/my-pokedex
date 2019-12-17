import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Email Inválido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  function handleSubmit({ email, password }) {
    console.log({ email, password });
  }

  return (
    <>
      <img src={logo} alt="Pokedex" width="100px" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>
        <Link to="/register">Quero ser um Treinador</Link>
      </Form>
    </>
  );
}
