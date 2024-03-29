import produce from 'immer';

const INITIAL_STATE = {
  user: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/LOGIN_SUCCESS':
      return produce(state, draft => {
        draft.user = action.payload.user;
      });
    case '@auth/LOGOUT':
      return produce(state, draft => {
        draft.user = null;
      });
    default:
      return state;
  }
}
