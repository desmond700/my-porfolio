<script setup lang="ts">
import type { IProject } from "@/types";
import type { PropType } from "vue";

defineProps<{
  project: IProject;
  textColor: string;
  githubButtonTextColor: string;
}>();
</script>

<template>
  <div class="project-details-header">
    <p id="project-name" :style="{ color: $props.textColor }">
      {{ $props.project.projectName }}
    </p>
    <p id="project-description" :style="{ color: $props.textColor }">
      {{ $props.project.description }}
    </p>
    <a id="github-btn" target="_blank" :href="$props.project.github">
      <i class="fab fa-github"></i>
      <span id="label" :style="{ color: $props.githubButtonTextColor }"
        >View on Github</span
      >
    </a>
  </div>
</template>

<style lang="scss" scoped>
.project-details-header {
  display: none;
  flex-direction: column;
  margin-bottom: 10px;

  #project-name {
    font-size: 1.5em;
    font-weight: 600;
    color: var(--primary-color);
  }

  #project-description {
    margin: 20px 0;
    font-size: 0.9em;
    color: var(--primary-color);
  }

  a#github-btn {
    display: flex;
    width: 141px;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid rgb(216, 216, 216);
    text-decoration: none;
    color: rgb(0, 102, 255);
    cursor: pointer;

    &:hover {
      border: 1px solid transparent;
      background-color: #fff !important;

      i {
        color: #000 !important;
      }

      #label {
        color: #000 !important;
      }
    }

    i {
      color: #fff !important;
    }

    #label {
      margin-left: 5px;
      font-size: 0.9em;
      white-space: nowrap;
      color: #fff !important;
    }
  }
}
</style>
