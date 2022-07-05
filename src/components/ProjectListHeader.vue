<script setup lang="ts">
import { Menu } from "mdue";

defineEmits(["on-open-navbar"]);
</script>

<template>
  <div class="project-list-header">
    <button id="navbar-open" @click="$emit('on-open-navbar')">
      <Menu id="icon" />
    </button>
    <p id="header-label">{{ $route.meta.pageName }}</p>
  </div>
</template>

<style lang="scss" scoped>
.project-list-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: var(--app-header-height);
  padding: 0 30px;
  background-color: var(--primary-color);

  #header-label {
    font-size: 1.4em;
    color: #fff;
    font-weight: bold;
  }
}
</style>
