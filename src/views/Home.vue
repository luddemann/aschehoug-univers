<script setup>
import Hero from '../components/Hero.vue'
import Aktuelt from '../components/Aktuelt.vue'
import Saker from '../components/Saker.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <main>
    <Hero :scroll="scrollTo" />
    <Aktuelt class="aktuelt" />
    <Saker />
    <Footer />
  </main>
</template>


<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    scrollTo() {
      var el = this.$el.getElementsByClassName("aktuelt")[0];
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>
