<template>
  <div class="card">
    <div class="card__header">
      <div class="card__picture">
        <div class="card__picture-overlay">&nbsp;</div>
        <img
          src="../../assets/img/tours/tour-1-cover.jpg"
          alt="Tour 1"
          class="card__picture-img"
        />
      </div>

      <h3 class="heading-tertirary">
        <span>{{ name }}</span>
      </h3>
    </div>

    <div class="card__details">
      <h4 class="card__sub-heading">Easy {{ duration }}-day tour</h4>
      <p class="card__text">
        {{ summary }}
      </p>
      <div class="card__data">
        <svg class="card__icon">
          <use xlink:href="img/icons.svg#icon-map-pin"></use>
        </svg>
        <span>{{ location }}</span>
      </div>
      <div class="card__data">
        <svg class="card__icon">
          <use xlink:href="img/icons.svg#icon-calendar"></use>
        </svg>
        <span>April 2021</span>
      </div>
      <div class="card__data">
        <svg class="card__icon">
          <use xlink:href="img/icons.svg#icon-flag"></use>
        </svg>
        <span>{{ stops }} stops</span>
      </div>
      <div class="card__data">
        <svg class="card__icon">
          <use xlink:href="img/icons.svg#icon-user"></use>
        </svg>
        <span>{{ maxGroupSize }} people</span>
      </div>
    </div>

    <div class="card__footer">
      <p>
        <span class="card__footer-value">${{ price }}</span>
        <span class="card__footer-text"> per person</span>
      </p>
      <p class="card__ratings">
        <span class="card__footer-value">{{ rating }} </span>
        <span class="card__footer-text"> rating (21)</span>
      </p>
      <a href="#" class="btn btn--green btn--small">Details</a>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "id",
    "name",
    "duration",
    "maxGroupSize",
    "location",
    "description",
    "rating",
    "price",
    "summary",
    "stops",
  ],
};
</script>
