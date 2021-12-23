<template>
  <main class="main">
    <div class="user-view">
      <nav class="user-view__menu">
        <ul class="side-nav">
          <li class="side-nav--active">
            <a href="#"
              ><svg>
                <use xlink:href="img/icons.svg#icon-settings"></use></svg
              >Settings</a
            >
          </li>
          <li>
            <a href="#"
              ><svg>
                <use xlink:href="img/icons.svg#icon-briefcase"></use></svg
              >My bookings</a
            >
          </li>
          <li>
            <a href="#"
              ><svg>
                <use xlink:href="img/icons.svg#icon-star"></use></svg
              >My reviews</a
            >
          </li>
          <li>
            <a href="#"
              ><svg>
                <use xlink:href="img/icons.svg#icon-credit-card"></use></svg
              >Billing</a
            >
          </li>
        </ul>
        <div v-if="isAdmin" class="admin-nav">
          <h5 class="admin-nav__heading">Admin</h5>
          <ul class="side-nav">
            <li>
              <a href="#"
                ><svg>
                  <use xlink:href="img/icons.svg#icon-map"></use></svg
                >Manage tours</a
              >
            </li>
            <li>
              <a href="#"
                ><svg>
                  <use xlink:href="img/icons.svg#icon-users"></use></svg
                >Manage users</a
              >
            </li>
            <li>
              <a href="#"
                ><svg>
                  <use xlink:href="img/icons.svg#icon-star"></use></svg
                >Manage reviews</a
              >
            </li>
            <li>
              <a href="#"
                ><svg>
                  <use xlink:href="img/icons.svg#icon-briefcase"></use></svg
              ></a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="user-view__content">
        <div class="user-view__form-container">
          <h2 class="heading-secondary ma-bt-md">Your account settings</h2>
          <form class="form form-user-data">
            <div class="form__group">
              <h1>username : {{ username }}</h1>
            </div>

            <div class="form__group">
              <label class="form__label" for="name">Name</label
              ><input
                class="form__input"
                id="name"
                type="text"
                required="required"
                v-model="name"
              />
            </div>
            <div class="form__group">
              <label class="form__label" for="name">Last Name</label
              ><input
                class="form__input"
                id="lastname"
                type="text"
                required="required"
                v-model="lastname"
              />
            </div>
            <div class="form__group ma-bt-md">
              <label class="form__label" for="email">Email address</label
              ><input
                class="form__input"
                id="email"
                type="email"
                required="required"
                v-model="email"
              />
            </div>
            <div class="form__group form__photo-upload">
              <img class="form__user-photo" :src="image" alt="User photo" /><a
                class="btn-text"
                href=""
                >Choose new photo</a
              >
            </div>
            <div class="form__group right">
              <button class="btn btn--small btn--green">Save settings</button>
            </div>
          </form>
        </div>
        <div class="line">&nbsp;</div>
        <div class="user-view__form-container">
          <h2 class="heading-secondary ma-bt-md">Password change</h2>
          <form class="form form-user-settings">
            <div class="form__group">
              <label class="form__label" for="password-current"
                >Current password</label
              ><input
                class="form__input"
                id="password-current"
                type="password"
                placeholder="••••••••"
                required="required"
                minlength="8"
              />
            </div>
            <div class="form__group">
              <label class="form__label" for="password">New password</label
              ><input
                class="form__input"
                id="password"
                type="password"
                placeholder="••••••••"
                required="required"
                minlength="8"
              />
            </div>
            <div class="form__group ma-bt-lg">
              <label class="form__label" for="password-confirm"
                >Confirm password</label
              ><input
                class="form__input"
                id="password-confirm"
                type="password"
                placeholder="••••••••"
                required="required"
                minlength="8"
              />
            </div>
            <div class="form__group right">
              <button class="btn btn--small btn--green">Save password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      lastname: "",
      username: "",
      email: "",
      photo: "",
      user: null,
      userId: null,
      current_password: "",
      password: "",
      confirm_password: "",
      role: null,
    };
  },
  async created() {
    if (this.$route.params.id) {
      this.userId = this.$route.params.id;
      await this.loadUser(this.userId);
      return;
      // function to load a user check if admin...
    }
    await this.$store.dispatch("fetchMe");
    const user = this.$store.getters.me;
    this.populateUser(user);
  },
  computed: {
    isAdmin() {
      return this.role == "admin";
    },
    image() {
      const photo = this.photo;
      return photo
        ? require(`@/assets/img/users/${photo}`)
        : require(`@/assets/img/users/default.jpg`);
    },
  },
  methods: {
    populateUser(user) {
      this.user = user;
      this.name = user.name;
      this.lastname = user.lastname;
      this.email = user.email;
      this.username = user.username;
      this.role = user.role;
      this.photo = user.photo;
    },
    async loadUser(Id) {
      const token = this.$store.getters.token;

      const headers = { Authorization: `Bearer ${token}` };

      const response = await axios({
        method: "get",
        url: `http://127.0.0.1:8000/api/v1/users/${Id}`,
        headers,
      });
      if (!response.status == 200) {
        const error = new Error("Failed load user Check your credentials.");
        throw error;
      }

      const user = response.data.user;
      this.populateUser(user);
    },
  },
};
</script>
