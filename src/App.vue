<template>
  <div id="app">
    <navbar />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import Navbar from './components/Layout/Navbar.vue';
import AppFooter from './components/Layout/AppFooter.vue';

export default {
  components: { Navbar, AppFooter },
};
</script>
Navbar