<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref } from "vue";
import NavigationBar from "./components/NavigationBar.vue";
import PageHeader from "./components/PageHeader.vue";

const showNavBar = ref(false);

function toggleNavBar(value: boolean) {
  console.log("toggleNavBar: value ", value);
  showNavBar.value = value;
}
</script>

<template>
  <navigation-bar
    :toggle-navbar="showNavBar"
    @close-navbar="toggleNavBar(false)"
  />
  <div
    id="overlay"
    :style="{ display: showNavBar ? 'block' : 'none' }"
    @click="showNavBar = false"
  ></div>
  <div id="main">
    <PageHeader @open-navbar="toggleNavBar(true)" />
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/base.css";
@import "@/styles/main.scss";
@import "@/styles/media-queries.scss";

#app {
  position: relative;
  display: flex;
  height: calc(100vh - 1px);
  text-align: center;
  color: #2c3e50;
  overflow: hidden;

  #overlay {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 3;
  }

  #main {
    position: relative;
    flex-grow: 1;
    height: 100%;
    background-color: var(--primary-color);
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 2;

    #content {
      display: flex;
      position: relative;
      min-height: calc(100vh - var(--app-header-height));
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
