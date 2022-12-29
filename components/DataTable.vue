<template>
  <section>
    <h2>{{ getGlobals }}</h2>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "DataTable",
  computed: {
    getGlobals() {
      return this.$store.state.globals.globalMessage;
    },
  },

  data: () => {
    return {
      items: [],
    };
  },

  methods: {
    fetchPage: function (url = 1) {
      // Ejemplo llamada ajax dentro de un Componente

      this.$store.commit(
        "globals/setGlobal",
        "Estamos cargando, seguimos cargando..."
      );

      fetch(`https://rickandmortyapi.com/api/character?page=${url}`)
        .then((response) => response.json())
        .then((data) => {
          setTimeout(() => {
            this.$store.commit("globals/setGlobal", "Cargamos todo cheeee");
            this.items = data.results;
          }, 3000);
        });
    },
  },

  mounted() {
    this.fetchPage();
  },
};
</script>

<style></style>
