<template>
  <div class="w-100">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="container">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-navbar-brand :to="{ name: 'home' }"> <img src="../../assets/logo.svg" width="150px" /> </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown text="Movies" left>
              <b-dropdown-item href="#">Popular</b-dropdown-item>
              <b-dropdown-item href="#">Not Playing</b-dropdown-item>
              <b-dropdown-item href="#">Upcoming</b-dropdown-item>
              <b-dropdown-item href="#">Top Rated</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="#">TV Shows</b-nav-item>
            <b-nav-item href="#">People</b-nav-item>
            <b-nav-item href="#">More</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown :text="selectedLang" right>
              <b-dropdown-item href="#">English</b-dropdown-item>
              <b-dropdown-item href="#">Spanish</b-dropdown-item>
              <b-dropdown-item href="#">German</b-dropdown-item>
              <b-dropdown-item href="#">French</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="#">Login</b-nav-item>
            <b-nav-item href="#">Join MMDB</b-nav-item>
          </b-navbar-nav>
        </b-collapse>

        <b-navbar-nav>
          <b-nav-item href="#"><b-icon icon="search" variant="primary"></b-icon></b-nav-item>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',

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


