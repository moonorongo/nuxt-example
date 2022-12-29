<template>
  <div>
    <div v-if="$nuxt.isOffline">
      You are offline (INTERESANTE)<br /><br />
      Esto detecta si estamos offline (no es un SW, porque si refrescamos la
      pagina sonamos...)
    </div>
    <div v-else>
      <h1 class="text-6xl font-bold myForegroundColor">Hello world!!</h1>
      <Home />
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "main_layout",

  // control loading bar
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 2500);
    });
  },
};
</script>

<style>
.myForegroundColor {
  color: aquamarine;
}
</style>
