import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/LOGIN_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@auth/LOGIN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
      });
    case '@auth/LOGIN_REGISTER_FAILURE':
      return produce(state, draft => {
        draft.loading = false;
      });
    case '@auth/LOGOUT':
      return produce(state, draft => {
        draft.token = null;
        draft.signed = false;
      });
    default:
      return state;
  }
}
