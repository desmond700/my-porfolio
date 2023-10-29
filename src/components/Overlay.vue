<script lang="ts">
export default {
  name: "OverlayItem",
};
</script>
<script setup lang="ts">
defineEmits(["on-close"]);
</script>

<template>
  <div id="overlay-container">
    <div id="overlay" @click="$emit('on-close')"></div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
#overlay-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;

  #overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.86);
    z-index: 1;
  }
}
</style>
