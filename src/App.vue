<template>
  <div id="app">
    <transition name="fade">
      <Component :is="background"></Component>
    </transition>
    
    <div class="mainContent">
      
        <fitty :options="fittext">
          <template v-slot:content>
            <h1>Vue Ambient Backgrounds</h1>
          </template>
        </fitty>
      
      <br>
      <v-layout column>
        <!-- Place this tag where you want the button to render. -->
        <a
          class="github-button"
          href="https://github.com/schlunsen/vue-ambient-backgrounds"
          data-icon="octicon-star"
          aria-label="Star on GitHub"
        >Star</a>
      </v-layout>
    </div>
    <div class="bg-selectors">
      <v-layout row wrap justify-center>
        
      
      <v-btn @click="changeBackground('aurora')">Aurora</v-btn>
      <v-btn @click="changeBackground('smoke')">Smoke</v-btn>
      <v-btn @click="changeBackground('pipeline')">Pipeline</v-btn>
      <v-btn @click="changeBackground('coalesce')">Coalesce</v-btn>
      <v-btn @click="changeBackground('shift')">Shift</v-btn>
      <v-btn @click="changeBackground('aether')">Æther</v-btn>
      </v-layout>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify";
import Fitty from "vue-fitty";
import Aurora from "./components/Aurora.vue";
import Smoke from "./components/Smoke.vue";
import Coalesce from "./components/Coalesce.vue";
import Pipeline from "./components/Pipeline.vue";
import Shift from "./components/Shift.vue";
import Aether from "./components/Aether.vue";
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader
Vue.use(Vuetify);
Vue.use(Fitty);

const backgrounds = {
  aurora: Aurora,
  smoke: Smoke,
  pipeline: Pipeline,
  coalesce: Coalesce,
  shift: Shift,
  aether: Aether
};

export default {
  name: "app",
  data: () => ({
    background: Coalesce,
    options: {},
    fittext: {
      maxSize: 70
    }
  }),
  methods: {
    changeBackground(bg) {
      this.background = backgrounds[bg];
    }
  },
  components: {
    Aurora,
    Smoke,
    Coalesce,
    Pipeline,
    Shift
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  padding: 0;
}
.mainContent {
  position: absolute;
  
  width: 100%;
  height: 100%;
  
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  -webkit-text-stroke: 1px #3f3f3f;
  margin-top: 40px;
}
.bg-selectors {
  position: fixed;
  width: 100%;

  
  bottom: 0;
  z-index: 2;
  bottom: 20%;
  
  
}
.bg-selectors .wrap {

}
body,
html {
  padding: 0;
  margin: 0;
}
</style>
