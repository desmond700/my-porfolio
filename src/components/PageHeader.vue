<script setup lang="ts">
import { computed, type StyleValue } from "vue";
// import { useStore } from "@/stores/counter";
import type { HeaderTitle } from "@/types";

const props = defineProps<{
  headerTitle: HeaderTitle;
}>();

const headerTitle = computed<StyleValue>(
  () =>
    ({
      textAlign: props.headerTitle.align,
    } as StyleValue)
);

function toggleNavbar() {
  // const store = useStore();
  // let showNav = store.state.showNav;
  // store.dispatch('toggleNavbar', !showNav)
}
</script>

<template>
  <div class="page-header">
    <button class="btn" id="menu" @click="toggleNavbar()">
      <i class="fas fa-bars" />
    </button>
    <h4 class="page-header-title" :style="headerTitle">
      {{ $props.headerTitle.text }}
    </h4>
  </div>
</template>
