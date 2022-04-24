<template>
  <div class="">
    <b-tabs content-class="" align="center" class="mt-2">
      <b-tab title="Overview" active>
        <movie-overview-tab :movie="movie" :movie-people="moviePeople" :is-loading="isLoading"></movie-overview-tab>
      </b-tab>

      <b-tab title="Media">
        <p>Some media tab content.</p>
      </b-tab>
      <b-tab title="Fandom">
        <p>Some fandom tab content.</p>
      </b-tab>
      <b-tab title="Share">
        <p>Some share tab content.</p>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { uniq } from 'lodash';
import MovieOverviewTab from '@/components/MovieDetails/MovieOverviewTab.vue';

export default {
  name: 'MovieDetails',
  title: 'MiniMovieDB',
  components: { MovieOverviewTab },

  data() {
    return {
      movie: {},
      moviePeople: [],
      movieId: 'tt3896198',
      apiKey: 'd2132124',
      isLoading: false,

      windowWidth: window.innerWidth,
    };
  },

  computed: {
    isMobSmallScreen() {
      return this.windowWidth <= 420;
    },
  },

  methods: {
    async fetchMovieDetials() {
      this.isLoading = true;
      this.movie = await (await fetch(`http://www.omdbapi.com/?i=${this.movieId}&apikey=${this.apiKey}`)).json();

      this.$title = this.movie.Title;

      // const people = [];
      const allPeople = uniq(
        [this.movie.Director, this.movie.Writer, this.movie.Actors]
          .map((peeps) => peeps.split(',').map((p) => p.trim()))
          .flat()
      );
      this.moviePeople = allPeople.map((p) => {
        const types = [];
        if (this.movie.Director.includes(p)) types.push('Director');
        if (this.movie.Writer.includes(p)) types.push('Writer');
        if (this.movie.Actors.includes(p)) types.push('Actors');

        return { name: p, types: types.join(', ') };
      });

      console.log(allPeople);
      // const directors = this.movie.Director.split(',').map(p => p.trim());
      // const directors = this.movie.Director.split(',').map(p => p.trim());

      this.isLoading = false;
    },

    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },

  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.fetchMovieDetials();
  },
};
</script>
