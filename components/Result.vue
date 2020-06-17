<template>
  <section id="result" class="hero is-fullheight is-primary">
    <div class="hero-body">
      <div class="container has-text-centered" v-if="labs[0]">
        <h1 class="title">
          あなたにおすすめの研究室は...
        </h1>
        <!-- <div id="first" class="card rank first" v-inview:enter="OnEnter"> -->
        <div id="first" class="card rank first" v-inview:animate="'fadeInLeft'">
          <header class="lab-card-header">
            <div class="header-content">
              <p class="card-header-title">
                <span class="first_num">1</span>
              </p>
            </div>
          </header>
          <div class="card-content">
            <p class="lab-title">
              {{labs[0].name.split(" ")[0]}}　研
            </p>
            <div class="lab-explanation">
              <h2>研究室紹介</h2>
              <p class="lab-subtitle">
                {{labs[0].options[0].outline}}
              </p>
              <h2>こんな学生に向いてるかも</h2>
              <p class="lab-subtitle">
                {{labs[0].options[0].need}}
              </p>
            </div>
          </div>
        </div>

        <div class="card rank second" v-inview:animate="'fadeInLeft'" v-if="labs[1]">
          <header class="lab-card-header">
            <div class="header-content">
              <p class="card-header-title">
                <span class="second_num">2</span>
              </p>
            </div>
          </header>
          <div class="card-content">
            <p class="lab-title">
              {{labs[1].name.split(" ")[0]}}　研
            </p>
            <div class="lab-explanation">
              <h2>研究室紹介</h2>
              <p class="lab-subtitle">
                {{labs[1].options[0].outline}}
              </p>
              <h2>こんな学生に向いてるかも</h2>
              <p class="lab-subtitle">
                {{labs[1].options[0].need}}
              </p>
            </div>
          </div>
        </div>

        <div class="card rank third" v-inview:animate="'fadeInLeft'" v-if="labs[2]">
          <header class="lab-card-header">
            <div class="header-content">
              <p class="card-header-title">
                <span class="third_num">3</span>
              </p>
            </div>
          </header>
          <div class="card-content">
            <p class="lab-title">
              {{labs[2].name.split(" ")[0]}}　研
            </p>
            <div class="lab-explanation">
              <h2>研究室紹介</h2>
              <p class="lab-subtitle">
                {{labs[2].options[0].outline}}
              </p>
              <h2>こんな学生に向いてるかも</h2>
              <p class="lab-subtitle">
                {{labs[2].options[0].need}}
              </p>
            </div>
          </div>
        </div>

        <div class="card rank others" v-inview:animate="'fadeInLeft'" v-for="lab in labs.slice(3)" v-bind:key="lab.id">
          <div class="card-content">
            <p class="lab-title">
              {{lab.name.split(" ")[0]}}　研
            </p>
            <div class="lab-explanation">
              <h2>研究室紹介</h2>
              <p class="lab-subtitle">
                {{lab.options[0].outline}}
              </p>
              <h2>こんな学生に向いてるかも</h2>
              <p class="lab-subtitle">
                {{lab.options[0].need}}
              </p>
            </div>            
          </div>
        </div>

        <!-- <div class="box">
        </div> -->
        <button class="redo button is-danger" v-inview:animate="'fadeInUp'" @click="reset">もう一度診断する</button>
      </div>
    </div>
  </section>
</template>

<script>
import SweetScroll from 'sweet-scroll';


export default { 
  data() {
    return {
      labs: []
    };
  },

  methods: {
    async GetResults() {
      const data = { 
            tags: this.$store.state.tags,
            questions: this.$store.state.answers,
          };
      const result_labs = await this.$axios.$post('/api/search', data);

      this.labs = await result_labs;
    },

    reset: function () {
      this.$router.go({path: this.$router.currentRoute.path, force: true})
    }
  },

  created() {
    this.GetResults();
  },

  mounted() {
    let scroll = new SweetScroll()
    const targetGroup = document.getElementById('result');
    const topPos = targetGroup.offsetTop;

    scroll.to(topPos);
  }
  
}
</script>

<style lang="scss" scoped>
.container {

  .title {
    margin: 15% 0;
  }

  .card {
    /* margin-bottom: 50px; */
    margin: 100px auto;
    position: relative;

    &:first-child {
      margin-bottom: 100px;
    }

    .card-content {
      color: #333;

      .lab-title {
        display: block;
        font-size: 3em;
        margin-bottom: 50px;
        margin-top: 50px;
        border-bottom: 1px solid #ddd;
      }

      .lab-explanation {
        width: 70%;
        margin: auto;

        h2 {
          font-size: 1.5em;
          text-align: left;
          border-bottom: 1px dashed #ddd;
        }
        
        .lab-subtitle {
          margin: 10px auto 50px auto;
          width: 80%;
        }
      }
      
    }

    header {
      position: absolute;
      .header-content {
        p {
          margin-left: 30px;
          font-size: 3em;
          bottom: 0;
          color: #aaa;
          
          .first_num {
            font-size: 1.8em;
          }

          .second_num {
            font-size: 1.4em;
          }

          .third_num {
            font-size: 1em;
          }
        }
      }
    }
  }

  .second {
    width: 95%;
    .card-content {
      .lab-title {
        font-size: 2.5em;
      }
    }
  }

  .third {
    width: 90%;
    .card-content {
      .lab-title {
        font-size: 2em;
      }
    }
  }

  .others {
    width: 90%;
    .card-content {
      .lab-title {
        font-size: 2em;
      }
    }
  }

  .redo {
    display: sticky;
    margin: auto;
  }
}
</style>