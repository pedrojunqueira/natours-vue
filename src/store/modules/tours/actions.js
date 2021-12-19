import axios from "axios";

export default {
  async loadTours(context) {
    const response = await axios("http://127.0.0.1:8000/api/v1/tours/");
    const tours = response.data.data;
    console.log(tours);
    context.commit("setTours", tours);
  },
};
