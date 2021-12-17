<template>
  <div class="login-form">
    <h2 class="heading-secondary ma-bt-lg">Sign up to Natours app</h2>
    <form class="form__group">
      <div class="form__group ma-bt-md">
        <label for="text" class="form__label">username</label>
        <input
          type="email"
          id="email"
          placeholder="your username"
          class="form__input"
        />
      </div>
      <div class="form__group ma-bt-md">
        <label for="email" class="form__label">Email address</label>
        <input
          type="email"
          id="email"
          placeholder="your@email.com"
          class="form__input"
        />
      </div>
      <div class="form__group ma-bt-md">
        <label for="password" class="form__label">Password</label>
        <input
          type="password"
          placeholder="*********"
          id="password"
          class="form__input"
        />
      </div>
      <div class="form__group ma-bt-md">
        <label for="confirm-password" class="form__label"
          >Confirm Password</label
        >
        <input
          type="password"
          placeholder="*********"
          id="confirm-password"
          class="form__input"
        />
      </div>
      <div class="form__group">
        <button class="btn btn--green">Sign up</button>
        <button @click="$router.push('/tours/login')" class="btn btn--green">
          Login
        </button>
      </div>
    </form>
  </div>
</template>
