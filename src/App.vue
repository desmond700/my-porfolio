<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref } from "vue";
import NavigationBar from "./components/NavigationBar.vue";
import ProjectListHeader from "./components/ProjectListHeader.vue";

const toggleNavBar = ref(false);
</script>

<template>
  <navigation-bar
    :toggleNavBar="toggleNavBar"
    @on-close-navbar="toggleNavBar = false"
  />

  <div id="main">
    <project-list-header @on-open-navbar="toggleNavBar = true" />
    <div id="scroll-container">
      <div id="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/base.css";
@import "@/styles/main.scss";
@import "@/styles/media-queries.scss";

#app {
  display: flex;
  height: calc(100vh - 1px);
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

#main {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  // padding: 0 30px;
  background-color: var(--primary-color);

  #scroll-container {
    overflow-y: auto;
    overflow-x: hidden;

    #content {
      display: flex;
      position: relative;
      flex-grow: 1;
      min-height: calc(100vh - var(--app-header-height));
      margin-top: var(--app-header-height);
      padding: 0 30px;
      background-color: #fff;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      box-shadow: 2px 0 3px 2px rgba(0, 0, 0, 0.212);
      z-index: 2;
    }
  }
}
</style>
