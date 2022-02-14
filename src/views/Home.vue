<script setup>
import Hero from '../components/Hero.vue'
import Featured from '../components/Featured.vue'
import Articles from '../components/Articles.vue'
import Footer from '../components/Footer.vue'

const scrollTo = () => {
  var el = document.getElementsByClassName("featured")[0];
  el.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
  <main>
    <Hero :scroll="scrollTo" />
    <Featured class="featured" />
    <Articles />
    <Footer />
  </main>
</template>



