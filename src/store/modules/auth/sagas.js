import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../services/myPokedexApi';
import history from '../../../services/history';

import { loginSuccess, loginRegisterFailure } from './actions';

export function* login({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(loginSuccess(token, user));

    history.push('/pokemon');
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(loginRegisterFailure());
  }
}

export function* register({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    history.push('/');
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(loginRegisterFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function logout() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/LOGIN_REQUEST', login),
  takeLatest('@auth/REGISTER_REQUEST', register),
  takeLatest('@auth/LOGOUT', logout),
]);
