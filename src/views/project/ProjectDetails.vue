<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
import type { IProject } from "../../types";
import { Close, ChevronLeft, ChevronRight } from "mdue";
import { ref, computed } from "vue";
import type { PropType } from "vue";
import ProjectDetailsHeader from "@/components/ProjectDetailsHeader.vue";
import flutterProjectsJson from "../../assets/projects_data/flutter_projects.json";
import { useRoute, useRouter } from "vue-router";

// const props = defineProps({
//   project: {
//     type: Object as PropType<IProject>,
//     required: true,
//   },
// });

defineEmits(["on-close"]);

const route = useRoute();
const router = useRouter();
const flutterProjects = flutterProjectsJson["flutter_projects"];
const project = flutterProjects.find((project) => project.projectName === route.query.name) as IProject;
// console.log("project ", project);
const selectImage = ref(project.featured);
const screenshots = computed(() => project.images);
const baseUrl = import.meta.env.BASE_URL;

const previous = () => {
  let currentIndex = screenshots.value.findIndex(
    (screenshot) => screenshot === selectImage.value
  );
  const firstIndex = 0;

  if (currentIndex === -1) return;

  if (currentIndex === firstIndex) {
    currentIndex = screenshots.value.length - 1;
  } else {
    currentIndex -= 1;
  }

  selectImage.value = screenshots.value[currentIndex];
};

const next = () => {
  let currentIndex = screenshots.value.findIndex(
    (screenshot) => screenshot === selectImage.value
  );
  const lastIndex = screenshots.value.length - 1;

  if (currentIndex === -1) return;

  if (currentIndex === lastIndex) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }

  selectImage.value = screenshots.value[currentIndex];
};

function goBack() {
  router.back()
}
</script>

<template>
  <div id="project-details-container">
    <button id="close-btn" @click="goBack()">
      <Close class="icon" />
    </button>
    <div id="project-description-container">
      <p id="project-name">{{ project.projectName }}</p>
      <p id="project-description">{{ project.description }}</p>
      <a id="github-btn" target="_blank" :href="project.github">
        <i class="fab fa-github"></i>&nbsp;
        <span id="label">View on Github</span>
      </a>
      <div id="screenshots-container">
        <span
          class="screenshot-item"
          v-for="(imageUrl, index) in project.images"
          @click="selectImage = imageUrl"
          :class="{ active: selectImage === imageUrl }"
          :key="index"
        >
          <img :src="baseUrl + imageUrl" />
        </span>
      </div>
    </div>
    <div id="preview-container">
      <ProjectDetailsHeader
        :project="project"
        :text-color="'#fff'"
        :github-button-text-color="'#000'"
      />
      <img id="preview-image" v-if="selectImage != ''" :src="baseUrl + selectImage" />
      <button id="previous" @click="previous">
        <ChevronLeft class="icon" />
      </button>
      <button id="next" @click="next">
        <ChevronRight class="icon" />
      </button>
      <div id="screenshots-preview-container">
        <!-- <span
          class="screenshot-item"
          v-for="(imageUrl, index) in $props.project.images"
          @click="selectImage = imageUrl"
          :class="{ active: selectImage === imageUrl }"
          :key="index"
        > -->
        <img
          class="screenshot-item"
          v-for="(imageUrl, index) in project.images"
          @click="selectImage = imageUrl"
          :class="{ active: selectImage === imageUrl }"
          :src="baseUrl + imageUrl"
          :key="index"
        />
        <!-- </span> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#project-details-container {
  display: flex;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.54);
  background-color: #fff;
  z-index: 3;
  overflow: hidden;

  #close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 5;

    #icon {
      font-size: 1.2em;
      // color: #fff;
    }
  }

  #project-description-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    flex-grow: 1;
    max-height: 100%;
    padding: 15px 20px;
    margin: 5px 0;
    overflow-y: auto;
    overflow-x: hidden;

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
        background-color: rgb(27, 27, 27);

        i {
          color: #fff;
        }

        #label {
          color: #fff;
        }
      }

      #label {
        margin-left: 5px;
        font-size: 0.9em;
        white-space: nowrap;
      }
    }

    #screenshots-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
      grid-template-rows: auto;
      gap: 10px;
      margin-top: 20px;

      .active {
        background-color: var(--primary-color);
      }

      .screenshot-item {
        height: fit-content;
        padding: 5px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.54);
        border-radius: 4px;
        cursor: pointer;
        overflow: hidden;

        &:hover {
          box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.54);
        }

        img {
          max-width: 100%;
          height: auto;
          object-fit: cover;
        }
      }
    }
  }

  #preview-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    padding: 30px 20px;
    background-color: #000;

    &:hover {
      button#previous,
      button#next {
        opacity: 1;
      }
    }

    img#preview-image {
      max-height: 100%;
      max-width: 100%;
      max-width: 100%;
    }

    #screenshots-preview-container {
      display: none;
      flex-shrink: 0;
      height: 150px;
      max-width: 100%;
      margin-top: 10px;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;

      .active {
        border: 2px solid var(--primary-color);
      }

      .screenshot-item {
        max-height: 100%;
        width: auto;
        cursor: pointer;

        // &:hover {
        //   transform: scale(0.5, 0.5);
        // }

        &:not(:first-child) {
          margin-left: 10px;
        }
      }
    }

    button#previous,
    button#next {
      position: absolute;
      top: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      background: transparent;
      padding: 4px;
      border-radius: 5px;
      border: none;
      background-color: #303030;
      cursor: pointer;
      transition: opacity 0.3s ease;

      &:hover {
        background-color: #242424;
      }

      .icon {
        font-size: 1.5em;
        color: #fff;
      }
    }

    button#previous {
      left: 10px;
      margin-right: auto;
    }

    button#next {
      right: 10px;
      margin-left: auto;
    }
  }
}
</style>
