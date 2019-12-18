export function loginRequest(email, password) {
  return {
    type: '@auth/LOGIN_REQUEST',
    payload: { email, password },
  };
}

export function loginSuccess(token, user) {
  return {
    type: '@auth/LOGIN_SUCCESS',
    payload: { token, user },
  };
}

export function registerRequest(name, email, password) {
  return {
    type: '@auth/REGISTER_REQUEST',
    payload: { name, email, password },
  };
}

export function loginRegisterFailure() {
  return {
    type: '@auth/LOGIN_REGISTER_FAILURE',
  };
}

export function logout() {
  return {
    type: '@auth/LOGOUT',
  };
}
