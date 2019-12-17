import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.png';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Email Inválido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa de pelo menos 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  function handleSubmit({ email, password, name }) {
    console.log({ email, password, name });
  }

  return (
    <>
      <img src={logo} alt="Pokedex" width="100px" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome de Treinador" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Me tornar Treinador Pokémon</button>
        <Link to="/">Já Sou um Treinador</Link>
      </Form>
    </>
  );
}
