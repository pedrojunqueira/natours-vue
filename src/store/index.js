import { createStore } from "vuex";

import toursModule from "./modules/tours/index.js";

const store = createStore({
  modules: { tours: toursModule },
});

export default store;
