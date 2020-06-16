<template>
  <div class="wrapper">
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
    <Hero @submitted="HeroSubmitted" />
    <Questions v-if="top_submitted" @answerd="Answerd" />
    <Result v-if="answerd" />
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";
import Questions from "~/components/Questions.vue";
import Result from "~/components/Result.vue";

export default {
  components: {
    Hero,
    Questions,
    Result
  },

  data () {
    return {
      top_submitted: false,
      answerd: false,
    }
  },

  methods: {
    HeroSubmitted() {
      if (this.top_submitted) return;
      this.top_submitted = true;
    },

    Answerd() {
      if (this.answerd) return;
      this.answerd = true;
    },

    
  }
};
</script>

<style lang="scss" scoped>
body {
  scroll-behavior: smooth;
}
</style>
