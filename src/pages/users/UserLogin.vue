<template>
  <div class="login-form">
    <h2 class="heading-secondary ma-bt-lg">Log into your account</h2>
    <form class="form__group">
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
      <div class="form__group">
        <button class="btn btn--green">Login</button>
      </div>
    </form>
  </div>
</template>
