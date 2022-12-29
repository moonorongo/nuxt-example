<template>
  <div>
    <h1 class="text-6xl font-bold myForegroundColor">Data Page</h1>
    <data-table />
  </div>
</template>

<script>
import DataTable from "@/components/DataTable.vue";

export default {
  name: "DataPage",
  layout: "main_layout",
  components: {
    DataTable,
  },
};
</script>

<style></style>
