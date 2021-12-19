<template>
  <div v-if="selectedTour">
    <section class="section-header">
      <div class="heading-box">
        <h1 class="heading-primary">
          <span>{{ selectedTour.name }}</span>
        </h1>
        <div class="heading-box__group">
          <div class="heading-box__detail">
            <svg class="heading-box__icon">
              <use xlink:href="img/icons.svg#icon-clock"></use>
            </svg>
            <span class="heading-box__text"
              >{{ selectedTour.duration }} days</span
            >
          </div>
          <div class="heading-box__detail">
            <svg class="heading-box__icon">
              <use xlink:href="img/icons.svg#icon-map-pin"></use>
            </svg>
            <span class="heading-box__text">
              {{ selectedTour.startLocation.description }}</span
            >
          </div>
        </div>
      </div>
    </section>

    <section class="section-description">
      <div class="overview-box">
        <div>
          <div class="overview-box__group">
            <h2 class="heading-secondary ma-bt-lg">Quick facts</h2>
            <div class="overview-box__detail">
              <svg class="overview-box__icon">
                <use xlink:href="img/icons.svg#icon-calendar"></use>
              </svg>
              <span class="overview-box__label">Next date </span>
              <span class="overview-box__text"> {{ nextDate }} </span>
            </div>
            <div class="overview-box__detail">
              <svg class="overview-box__icon">
                <use xlink:href="img/icons.svg#icon-trending-up"></use>
              </svg>
              <span class="overview-box__label">Difficulty</span>
              <span class="overview-box__text">{{
                selectedTour.difficulty
              }}</span>
            </div>
            <div class="overview-box__detail">
              <svg class="overview-box__icon">
                <use xlink:href="img/icons.svg#icon-user"></use>
              </svg>
              <span class="overview-box__label">Participants</span>
              <span class="overview-box__text"
                >{{ selectedTour.maxGroupSize }} people</span
              >
            </div>
            <div class="overview-box__detail">
              <svg class="overview-box__icon">
                <use xlink:href="img/icons.svg#icon-star"></use>
              </svg>
              <span class="overview-box__label">Rating</span>
              <span class="overview-box__text"
                >{{ selectedTour.ratingsAverage }} / 5</span
              >
            </div>
          </div>

          <div class="overview-box__group">
            <h2 class="heading-secondary ma-bt-lg">Your tour guides</h2>
            <tour-guide
              v-for="guide in selectedTour.guides"
              :key="guide"
              :tourGuide="guide"
            ></tour-guide>
          </div>
        </div>
      </div>

      <div class="description-box">
        <h2 class="heading-secondary ma-bt-lg">About the park camper tour</h2>
        <p class="description__text">
          {{ selectedTour.description }}
        </p>
        <p class="description__text">
          {{ selectedTour.summary }}
        </p>
      </div>
    </section>

    <section class="section-pictures">
      <tour-picture-box
        v-for="pic in selectedTour.images"
        :key="pic"
        :image="pic"
      ></tour-picture-box>
    </section>

    <section class="section-map">
      <div id="map">
        <!-- Script to include mapblox  -->
      </div>
    </section>

    <section class="section-reviews">
      <div class="reviews">
        <div class="reviews__card">
          <div class="reviews__avatar">
            <img
              src="../../assets/img/users/user-7.jpg"
              alt="Jim Brown"
              class="reviews__avatar-img"
            />
            <h6 class="reviews__user">Jim Brown</h6>
          </div>
          <p class="reviews__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            dignissimos sint quo commodi corrupti accusantium veniam saepe
            numquam.
          </p>
          <div class="reviews__rating">
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>

        <div class="reviews__card">
          <div class="reviews__avatar">
            <img
              src="../../assets/img/users/user-14.jpg"
              alt="Laura Wilson"
              class="reviews__avatar-img"
            />
            <h6 class="reviews__user">Laura Wilson</h6>
          </div>
          <p class="reviews__text">
            Veniam adipisci blanditiis, corporis sit magnam aperiam ad, fuga
            reiciendis provident deleniti cumque similique itaque animi,
            sapiente obcaecati beatae accusantium.
          </p>
          <div class="reviews__rating">
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>

        <div class="reviews__card">
          <div class="reviews__avatar">
            <img
              src="../../assets/img/users/user-15.jpg"
              alt="Ben Hadley"
              class="reviews__avatar-img"
            />
            <h6 class="reviews__user">Ben Hadley</h6>
          </div>
          <p class="reviews__text">
            Debitis, nesciunt itaque! At quis officia natus. Suscipit,
            reprehenderit blanditiis mollitia distinctio ducimus porro tempore
            perspiciatis sunt vel.
          </p>
          <div class="reviews__rating">
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>

        <div class="reviews__card">
          <div class="reviews__avatar">
            <img
              src="../../assets/img/users/user-6.jpg"
              alt="Alexander Jones"
              class="reviews__avatar-img"
            />
            <h6 class="reviews__user">Alexander Jones</h6>
          </div>
          <p class="reviews__text">
            Quaerat laborum eveniet ut aut maiores doloribus mollitia aperiam
            quis praesentium sed inventore harum aliquam veritatis at adipisci
            ea assumenda!
          </p>
          <div class="reviews__rating">
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>

        <div class="reviews__card">
          <div class="reviews__avatar">
            <img
              src="../../assets/img/users/user-3.jpg"
              alt="Ayla Cornell"
              class="reviews__avatar-img"
            />
            <h6 class="reviews__user">Ayla Cornell</h6>
          </div>
          <p class="reviews__text">
            Perferendis quo aliquid iste quas laboriosam molestias illo est
            voluptatem odit ea. Vero placeat culpa provident dicta maiores!
          </p>
          <div class="reviews__rating">
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
            <svg class="reviews__star reviews__star--active">
              <use xlink:href="../../assets/img/icons.svg#icon-star"></use>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <section class="section-cta">
      <div class="cta">
        <div class="cta__img cta__img--logo">
          <img
            src="../../assets/img/logo-white.png"
            alt="Natours logo"
            class=""
          />
        </div>
        <img
          src="../../assets/img/tours/tour-5-2.jpg"
          alt=""
          class="cta__img cta__img--1"
        />
        <img
          src="../../assets/img/tours/tour-5-1.jpg"
          alt=""
          class="cta__img cta__img--2"
        />

        <div class="cta__content">
          <h2 class="heading-secondary">What are you waiting for?</h2>
          <p class="cta__text">
            10 days. 1 adventure. Infinite memories. Make it yours today!
          </p>
          <button class="btn btn--green span-all-rows">Book tour now!</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TourPictureBox from "./TourPictureBox.vue";
import TourGuide from "./TourGuide.vue";

export default {
  components: { TourPictureBox, TourGuide },
  props: ["selectedTour"],
  computed: {
    nextDate() {
      const startDates = this.selectedTour.startDates;
      const nextStart = new Date(startDates[0]);
      //   const month = nextStart.getMonth();
      const month = nextStart.toLocaleString("default", { month: "long" });
      const year = nextStart.getFullYear();
      return `${month}  ${year}`;
    },
  },
};
</script>
