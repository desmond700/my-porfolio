<script setup lang="ts">
import type { HeaderTitle } from "@/types";
import { Menu } from "mdue";

const emit = defineEmits<{
  (event: "open-navbar"): void
}>()

</script>

<template>
  <div class="page-header">
    <button class="btn" id="navbar-open" @click="$emit('open-navbar')">
      <Menu id="icon" />
    </button>
    <p id="header-label">{{ $route.meta.pageName }}</p>
  </div>
</template>

<style lang="scss" scoped>
.page-header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  height: var(--app-header-height);
  padding: 0 30px;
  background-color: var(--primary-color);

  #menu-btn {
    cursor: pointer;
  }

  #header-label {
    font-size: 1.4em;
    color: #fff;
    font-weight: bold;
  }
}
</style>
