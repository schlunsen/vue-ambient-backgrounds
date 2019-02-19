<template>
  <div id="app">
    <transition name="fade">
      <Component :is="background"></Component>
    </transition>
    <div class="bg-selectors">
      <button @click="changeBackground('aurora')">Aurora</button>
      <button @click="changeBackground('smoke')">Smoke</button>
      <button @click="changeBackground('pipeline')">Pipeline</button>
      <button @click="changeBackground('coalesce')">Coalesce</button>
      <button @click="changeBackground('shift')">Shift</button>
    </div>
  </div>
</template>

<script>
import Aurora from "./components/Aurora.vue";
import Smoke from "./components/Smoke.vue";
import Coalesce from "./components/Coalesce.vue";
import Pipeline from "./components/Pipeline.vue";
import Shift from "./components/Shift.vue";

const backgrounds = {
  aurora: Aurora,
  smoke: Smoke,
  pipeline: Pipeline,
  coalesce: Coalesce,
  shift: Shift
};

export default {
  name: "app",
  data: () => ({
    background: Coalesce,
    options: {}
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
.bg-selectors {
  position: fixed;
  bottom: 0;
  z-index: 2;
}
body,
html {
  padding: 0;
  margin: 0;
}
</style>
