<template>
  <section id="top-hero" class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Klis System Lab Finder</h1>
        <h2 class="subtitle">気になるタグを選んで診断しよう</h2>
        <div class="categolies">
          <button v-for="tag in tags" v-bind:key="tag.id" v-bind:value="tag.id" class="button is-medium" @click="categoryClicked">{{tag.category}}</button>
        </div>
        <div>
          <button class="submit button is-primary is-large"  v-on:click="clickSubmitButton">
            診断する
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      detail: false,
      show: true,
      tags:[
      ]
    };
  },

  methods: {
    categoryClicked(event) {
      event.target.classList.toggle("clicked");

      if (document.getElementsByClassName("clicked").length >= 3) {
        self.detail = !self.detail
      }
    },

    clickSubmitButton(event) {
      let tags = []
      let tag_collection = document.getElementsByClassName("clicked")
      if (tag_collection.length === 0) return;
      for( var i = 0; i < tag_collection.length; i++  ){
          tags.push(tag_collection[i].value)
        }

      this.$store.dispatch('tagsUploader', tags)
      this.$emit('submitted')
    },

    async GetTags() {
      const items = await this.$axios.$get('/api/get/tags');
      this.tags = await items;
    }

  },

  created() {
    this.GetTags();
  },
};
</script>

<style lang="scss" scoped >
@import "../node_modules/bulma/sass/utilities/initial-variables.sass";

#top-hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),
    url("../static/images/top.jpg");
  background-size: cover;
  background-position: center;

  .hero-body {
    .title {
      color: #fff;
      font-size: 3em;
      border-bottom: 1px solid #fff;
      padding-bottom: 10px;
      display: inline-block;
    }

    .subtitle {
      color: #ccc;
    }

    .submit {
      margin-top: 50px;
    }
  }

  .categolies {
    margin: auto;
    margin-top: 100px;
    max-width: 650px;

    button {
      color: #fff;
      background-color: transparent;
      margin: 5px 7px;
    }
    .button:focus {
      outline: none;
      border-color: inherit;
    }
    .button:active {
      outline: none;
      color: #fff;
      border-color: $green;
    }

    .clicked {
      color: $green;
      border-color: $green;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
