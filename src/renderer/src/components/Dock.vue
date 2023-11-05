<script setup>

import {onMounted} from "vue";

const handleDragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'copy';
}

const handleDragLeave = (event) => {
  event.preventDefault();
}

const handleDrop = (event) => {
  event.preventDefault();
  const filePath = event.dataTransfer.files[0].path;
  window.electronApi.dropFile(filePath)
  console.log(filePath);
}

onMounted(() => {
  console.log(window.location.href)
})
</script>

<template>
  <div id="dock" @dragover="handleDragOver" @dragleave="handleDragLeave" @drop="handleDrop">
    这是Dock栏
  </div>
</template>

<style scoped>
#dock {
  width: 200px;
  height: 200px;
  border: 1px solid black;
}
</style>
