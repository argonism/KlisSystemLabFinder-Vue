<template>
  <section id="questions" class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered" >
        <div class="card">
          <div class="card-content">
            <transition name="fade" mode="out-in">
              <p class="title" :key="current_pos">
                {{current.text}}
              </p>
            </transition>
            <div class="content" v-if="typeof current.options !== 'undefined'">
              <label class="radio" v-for="option in current.options" v-bind:key="option.value">
                <input type="radio" name="answer" v-bind:value="option.value" v-on:click="OnRadioClicked">
                {{option.title}}
              </label>
              <transition-group name="list">
              </transition-group>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SweetScroll from 'sweet-scroll';

export default { 
  transition: {
    name: 'test',
    mode: 'out-in'
  },
  data() {
    return {
      current_pos: 1,
      current: {},
      questions:[],
      answers: []
    };
  },

  methods: {
    OnRadioClicked(e) {
      this.answers.push(e.target.value)
      this.current_pos += 1;
      for (const element of document.getElementsByName('answer')) {
        element.checked = false;
      }
      if (this.current_pos == this.questions.length) {
        this.$store.dispatch('AnswersUploader', this.answers);
        this.$emit('answerd');
        this.current = {
          id: 100,
          text: "了解しました！",
        }
        return;
      }
      this.current = this.questions[this.current_pos]
    },

    FormatQuestions(json) {
      const new_questions = [{}];
      json.forEach(row => {
        new_questions.forEach(new_row => { 
          if (new_row['text'] && new_row['text'] === row.text) {
            new_row.options.push(row.options[0])
          }
        })
        

        if (!new_questions.some(new_row => { 
          if (new_row['text'] && new_row['text'] === row.text) return true; 
          })) 
        {
          new_questions.push(row)
        }
      })

      return new_questions;
    },

    async GetQuestions() {
      const items = await this.$axios.$get('/api/get/questions');
      const new_questions = this.FormatQuestions(await items); 
      this.questions = new_questions;
      this.current = this.questions[this.current_pos];
    },
  },

  created() {
    this.GetQuestions();
  },

  mounted() {
    let scroll = new SweetScroll()
    const targetGroup = document.getElementById('questions');
    const topPos = targetGroup.offsetTop;

    // 組み合わせて移動
    scroll.to(topPos);
  }
  
}
</script>

<style lang="scss" scoped>
@import "../node_modules/bulma/sass/utilities/initial-variables.sass";

.card .title {
  margin-bottom: 2em;
}

.card .content label {
  margin-right: 2em;
}

label {
  padding: 8px 16px;
  border-radius: 5px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


label {
  border: 1px solid #ddd;
  padding: 10px 20px;

  input[type=radio] {
    display: none;
  }

  &:hover {
    border: 1px solid $green;
    transition: all 0.5s;
  }

  &:active {
    border: 1px solid $green;
    background-color: $green;
    color: #fff;
    transition: all 0.3s;
  }
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
}

.list-move {
  transition: transform 1s;
}

.list-complete-leave-active {
  position: absolute;
}
</style>