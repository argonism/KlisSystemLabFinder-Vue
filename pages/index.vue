<template>
  <div class="wrapper">
    <Hero />
    <section id="top-hero" class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="card">
            <div class="card-content">
              <p class="title">
                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
              </p>
              <p class="subtitle">
                Jeff Atwood
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";

export default {
  components: {
    Hero
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.card {
  margin: 50px;
}
</style>
