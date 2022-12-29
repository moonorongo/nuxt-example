<template>
  <div>
    <h1 class="text-6xl font-bold myForegroundColor">Server Page</h1>

    <ul>
      <li v-for="item in posts" :key="item.id">
        <nuxt-link :to="{ path: `/details/${item.id}` }">{{
          item.name
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ServerPage",
  layout: "main_layout",
  components: {},

  async asyncData({ store }) {
    await Promise.all([store.dispatch("data/fetchData")]);
  },

  computed: {
    ...mapGetters("data", ["myData"]),

    posts() {
      return this.myData;
    },
  },
};
</script>

<style></style>
