<template>
  <header class="header">
    <nav class="nav nav--tours">
      <a href="/tours" class="nav__el">All tours</a>
    </nav>
    <div class="header__logo">
      <img src="../../assets/img/logo-white.png" alt="Natours logo" />
    </div>
    <nav class="nav nav--user">
      <a v-if="isLoggdedIn" href="#" class="nav__el">My bookings</a>
      <a v-if="isLoggdedIn" href="#" class="nav__el">
        <img
          src="../../assets/img/users/user-1.jpg"
          alt="User photo"
          class="nav__user-img"
        />
        <span>Jonas</span>
      </a>

      <a v-if="!isLoggdedIn" href="/tours/login" class="nav__el">Log in</a>
      <a v-if="!isLoggdedIn" href="/tours/sign_up" class="nav__el">Sign up</a>
      <a v-if="isLoggdedIn" @click="logout" class="nav__el">Log out</a>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggdedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/tours");
    },
  },
};
</script>
