<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

onMounted(() => {
  console.log("PAGE NOT FOUND: ", route.path);
});
</script>

<template>
  <div id="page-not-found">
    <p id="error-code">404</p>
    <p id="error-message">
      The requested url <span id="url">{{ route.path }}</span> has not been
      found.
    </p>
  </div>
</template>

<style lang="scss" scoped>
#page-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;

  #error-code {
    margin-bottom: 10px;
    font-size: 3.8em;
    font-weight: bold;
    color: var(--primary-color);
  }

  #error-message {
    font-weight: 500;

    #url {
      color: grey;
    }
  }
}
</style>
