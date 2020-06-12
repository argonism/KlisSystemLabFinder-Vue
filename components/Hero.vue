<template>
  <section id="top-hero" class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Klis System Lab Finder</h1>
        <h2 class="subtitle">気になるタグを選んで診断にしよう</h2>
        <div class="categolies">
          <button class="button is-medium" @click="categoryClicked">
            機械学習
          </button>
          <button class="button is-medium" @click="categoryClicked">
            図書館・教育
          </button>
          <button class="button is-medium" @click="categoryClicked">
            検索
          </button>
          <button class="button is-medium" @click="categoryClicked">
            情報行動
          </button>
          <button class="button is-medium" @click="categoryClicked">
            図書館・教育
          </button>
          <button class="button is-medium" @click="categoryClicked">
            検索
          </button>
          <button class="button is-medium" @click="categoryClicked">
            情報行動
          </button>
        </div>
        <button class="submit button is-primary is-large"  v-on:click="clickGrassPane">
          診断する
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      detail: false,
      show: true,
    };
  },

  methods: {
    categoryClicked(event) {
      event.target.classList.toggle("clicked");

      if (document.getElementsByClassName("clicked").length >= 3) {
        console.log("aaa")
        self.detail = !self.detail
      }
    },

    clickGrassPane(event) {
      self.detail = !self.detail
    },
  }
};
</script>

<style scoped lang="scss">
@import "../node_modules/bulma/sass/utilities/initial-variables.sass";

#top-hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),
    url("../static/images/top.jpg");
  background-size: cover;
  background-position: center;
}

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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
