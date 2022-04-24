<template>
  <footer class="mt-4 pt-4 bg-dark text-white">
    <div class="container container-fluid text-center text-md-left">
      <div class="row">
        <div class="col-md-4 mt-md-0 mt-3 text-md-right">
          <img src="../../assets/logo_full.svg" width="150px" />
        </div>

        <hr class="clearfix w-100 d-md-none pb-3" />

        <div class="col-md-2 mb-md-0 mb-3">
          <h5 class="text-uppercase">The Basics</h5>

          <ul class="list-unstyled">
            <li><a href="#" class="text-white">About TMDB</a></li>
            <li><a href="#" class="text-white">Contact Us</a></li>
            <li><a href="#" class="text-white">Support Forums</a></li>
            <li><a href="#" class="text-white">API</a></li>
            <li><a href="#" class="text-white">System Status</a></li>
          </ul>
        </div>

        <div class="col-md-2 mb-md-0 mb-3">
          <h5 class="text-uppercase">GET INVOLVED</h5>

          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Contribution Bible</a></li>
            <li><a href="#" class="text-white">Add New Movie</a></li>
            <li><a href="#" class="text-white">Add New TV Show</a></li>
          </ul>
        </div>

        <div class="col-md-2 mb-md-0 mb-3">
          <h5 class="text-uppercase">COMMUNITY</h5>

          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Guidelines</a></li>
            <li><a href="#" class="text-white">Discussions</a></li>
            <li><a href="#" class="text-white">Leaderboard</a></li>
            <li><a href="#" class="text-white">Twitter</a></li>
          </ul>
        </div>

        <div class="col-md-2 mb-md-0 mb-3">
          <h5 class="text-uppercase">LEGAL</h5>

          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Terms of Use</a></li>
            <li><a href="#" class="text-white">API Terms of Use</a></li>
            <li><a href="#" class="text-white">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',

  data() {
    return {
      windowWidth: window.innerWidth,
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


