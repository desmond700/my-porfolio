<script lang="ts">
export default {
  name: "OverlayItem",
};
</script>
<script setup lang="ts">
defineEmits(["on-close"]);
</script>

<template>
  <div id="overlay" @click="$emit('on-close')">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.86);
  z-index: 20;
}
</style>
