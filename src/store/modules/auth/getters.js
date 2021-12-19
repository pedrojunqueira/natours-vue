export default {
  username(state) {
    return state.username;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return !!state.token;
  },
};
