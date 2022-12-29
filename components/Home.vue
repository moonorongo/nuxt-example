<!-- Please remove this file from your project -->
<template>
  <div>
    <p class="text-5xl text-green/25">Hola Lalalala lalala</p>

    <h2 class="text-2xl font-bold">BASIS</h2>
    <div class="flex flex-row flex-wrap pb-4">
      <div class="bg-red-600 basis-1/4">BG RED</div>
      <div class="bg-green basis-1/4">BG GREEN</div>
      <div class="bg-indigo-900 basis-1/2">BG INDIGO</div>

      <div class="bg-yellow-200 basis-full">BG YELLOW</div>

      <div class="bg-indigo-100 basis-1/12">1/12</div>
      <div class="bg-indigo-900 basis-1/12">1/12</div>
      <div class="bg-yellow-200 basis-1/3">1/3</div>
      <div class="bg-indigo-100 basis-1/4">1/4</div>
      <div class="bg-red-200 basis-1/6">1/6</div>
      <div class="bg-red-600 basis-1/12">1/12 complet</div>

      <div class="bg-green">BG GREEN</div>
      <div class="bg-indigo-900">BG INDIGO</div>
      <div class="bg-yellow-200">BG YELLOW</div>
      <div class="bg-indigo-100">BG INDIGO</div>
      <div class="bg-red-200">BG RED</div>
      <div class="bg-gray-300">END OF FLEX</div>
    </div>

    <h2 class="text-2xl font-bold">WIDTH</h2>
    <div class="flex flex-row pt-4 pb-4">
      <div class="bg-red-600 flex-1 w-64 h-10">BG RED</div>
      <div class="bg-green flex-initial w-64 h-10">BG GREEN</div>
      <div class="bg-indigo-900 flex-initial w-64 h-10">BG INDIGO</div>
      <div class="bg-yellow-200 flex-initial w-64 h-10">BG YELLOW</div>
    </div>

    <hr />

    <h2 class="text-2xl font-bold">GRID</h2>
    <div class="grid pt-4 grid-cols-5 gap-3">
      <div class="bg-red-600 h-16">BG RED</div>
      <div class="bg-green h-16">BG GREEN</div>
      <div class="bg-indigo-900 h-16">BG INDIGO</div>
      <div class="bg-yellow-200 h-16">BG YELLOW</div>
      <div class="bg-red-600 h-16">BG RED</div>
      <div class="bg-green h-16">BG GREEN</div>
      <div class="bg-indigo-900 h-16">BG INDIGO</div>
      <div class="bg-yellow-200 h-16">BG YELLOW</div>
      <div class="bg-red-600 h-16">BG RED</div>
      <div class="bg-green h-16">BG GREEN</div>
      <div class="bg-indigo-900 h-16">BG INDIGO</div>
      <div class="bg-yellow-200 h-16">BG YELLOW</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
