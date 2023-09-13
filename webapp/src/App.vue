<template>
  <router-view />
</template>

<script lang="ts" setup>
  //
</script>

<style>
body::before {
  background-image: url('/background.png');
  background-color: #eee;
  content: "";
  background-size: auto;
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: center center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.05; 
  z-index: 0; 
}

body {
  overflow-y: hidden;
}
</style>