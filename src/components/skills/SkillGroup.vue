<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <div class="skill-group">
    <p id="skill-label">{{ $props.label }}</p>
    <div id="skill-content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skill-group {
  display: flex;
  flex-direction: column;
  margin: 30px 0;

  #skill-label {
    width: fit-content;
    margin-bottom: 15px;
    font-size: 1.4em;
    font-weight: 600;
    color: var(--secondary-color);
  }

  #skill-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding-left: 30px;
  }
}
</style>
