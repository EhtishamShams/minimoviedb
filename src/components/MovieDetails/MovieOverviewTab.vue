<template>
  <div class="pb-2">
    <!-- Overview Basics -->
    <div class="bg-dark text-white pt-4">
      <div class="container px-3">
        <div class="row">
          <div class="col-md-3">
            <b-img :src="movie.Poster" class="w-100" rounded />
          </div>
          <div class="col-md-9">
            <h2 class="mt-2" :class="{ 'text-center': isMobSmallScreen }">
              {{ movie.Title }} <span class="text-muted">({{ movie.Year }})</span>
            </h2>
            <div :class="{ 'text-center': isMobSmallScreen }">
              <b-badge variant="none" class="border border-light text-light mr-2">{{ movie.Rated }}</b-badge>
              <span>{{ movie.Released }} ({{ movie.Country }}) • {{ movie.Genre }} • {{ movie.Runtime }}</span>
            </div>

            <!-- Rating -->
            <div class="d-flex align-items-center my-4">
              <vue-ellipse-progress
                :progress="(movie.imdbRating || 0) * 10"
                :size="70"
                fontSize="1.5rem"
                color="green"
              />
              <strong class="ml-3">
                User <br />
                Score</strong
              >
              <b-btn variant="link" class="ml-2" v-b-popover.hover.bottom="'Edit'"
                ><b-icon icon="list-ul"></b-icon
              ></b-btn>
              <b-btn variant="link" class="ml-2" v-b-popover.hover.bottom="'Like'"
                ><b-icon icon="heart"></b-icon
              ></b-btn>
              <b-btn variant="link" class="ml-2" v-b-popover.hover.bottom="'Bookmark'"
                ><b-icon icon="bookmark"></b-icon
              ></b-btn>
              <b-btn variant="link" class="ml-2" v-b-popover.hover.bottom="'Rate'"><b-icon icon="star"></b-icon></b-btn>
            </div>

            <!-- Overview -->

            <h5 class="mt-3">Overview</h5>
            <p>{{ movie.Plot }}</p>

            <!-- People -->
            <ul
              :style="`
                    -moz-column-count: ${isMobSmallScreen ? 2 : 3};
                    -moz-column-gap: 20px;
                    -webkit-column-count: ${isMobSmallScreen ? 2 : 3};
                    -webkit-column-gap: 20px;
                    column-count: ${isMobSmallScreen ? 2 : 3};
                    column-gap: 20px;
                    `"
              class="mx-0 px-0 list-unstyled"
            >
              <li v-for="person in moviePeople" :key="person.name" class="mb-3">
                <div>
                  <strong>{{ person.name }}</strong>
                </div>
                {{ person.types }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-4">
      <div class="row">
        <!-- Cast & other content -->
        <div class="col-md-10">
          <h4>Top Billed Cast</h4>
          <p>Billed cast content can be added here.</p>

          <h4>Full Cast & Crew</h4>
          <p>Full cast content can be added here.</p>

          <div v-if="movie.Awards">
            <h4>Awards</h4>
            <p>{{ movie.Awards }}</p>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="col-md-2">
          <strong>Status</strong>
          <p>{{ movie.Released ? 'Released' : 'Upcoming' }}</p>

          <strong>Original Language</strong>
          <p>{{ movie.Language }}</p>

          <strong>Box Office</strong>
          <p>{{ movie.BoxOffice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEllipseProgress } from 'vue-ellipse-progress';

export default {
  name: 'MovieOverviewTab',

  components: { VueEllipseProgress },

  props: {
    movie: Object,
    moviePeople: Array,
    isLoading: { type: Boolean, default: false },
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      selectedLang: 'EN',
    };
  },

  computed: {
    isMobSmallScreen() {
      return this.windowWidth <= 420;
    },
  },

  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },

  async mounted() {
    window.addEventListener('resize', this.handleResize);
  },
};
</script>


