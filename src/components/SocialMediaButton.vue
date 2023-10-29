<script setup lang="ts">
defineProps<{
  href: string;
}>();
</script>

<template>
  <a :href="$props.href" target="_blank" class="social-media-icon">
    <slot />
  </a>
</template>

<style lang="scss" scoped>
.social-media-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 26px;
  padding: 5px;
  // margin: 0 20px;
  background-color: #fff;
  color: var(--primary-color);
  text-decoration: none;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: var(--primary-color);
    text-decoration: none;
    color: #fff;
  }

  i {
    margin: auto;
  }
}
</style>
