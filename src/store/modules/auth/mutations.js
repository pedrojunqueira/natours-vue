export default {
  setUser(state, payload) {
    state.username = payload.username;
    state.token = payload.token;
  },
  resetUser(state) {
    (state.username = null), (state.token = null);
  },
};
