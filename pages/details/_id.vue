<template>
  <div>
    <h1 class="text-6xl font-bold">Detail Item Id {{ postId }}</h1>
    <h2>{{ itemData.name }}</h2>
    <div><strong>Status</strong>: {{ itemData.status }}</div>
    <div><strong>Species</strong>: {{ itemData.species }}</div>
    <div><strong>Type</strong>: {{ itemData.type }}</div>
    <div><strong>Gender</strong>: {{ itemData.gender }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DataPage",
  layout: "main_layout",
  components: {},

  async asyncData({ store }) {
    await Promise.all([store.dispatch("data/fetchData")]);
  },

  computed: {
    ...mapGetters("data", ["myData"]),

    postId() {
      return this.$route.params.id;
    },

    itemData() {
      return this.myData[this.$route.params.id];
    },
  },
};
</script>

<style></style>
