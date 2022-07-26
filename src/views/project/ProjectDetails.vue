<script setup lang="ts">
import type { IProject } from "../../types";
import { Close, ChevronLeft, ChevronRight } from "mdue";
import { type PropType, ref, computed } from "vue";

const props = defineProps({
  project: {
    type: Object as PropType<IProject>,
    required: true,
  },
});

defineEmits(["on-close"]);

const selectImage = ref(props.project.featured);
const screenshots = computed(() => props.project.images);

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
</script>

<template>
  <div id="project-details-container">
    <button id="close-btn" @click="$emit('on-close')">
      <Close class="icon" />
    </button>
    <div id="project-description-container">
      <p id="project-name">{{ $props.project.projectName }}</p>
      <p id="project-description">{{ $props.project.description }}</p>
      <button id="github-btn">
        <i class="fab fa-github"></i>
        <span id="label">View on Github</span>
      </button>
      <div id="screenshots-container">
        <span
          class="screenshot-item"
          v-for="(imageUrl, index) in $props.project.images"
          @click="selectImage = imageUrl"
          :class="{ active: selectImage === imageUrl }"
          :key="index"
        >
          <img :src="imageUrl" />
        </span>
      </div>
    </div>
    <div id="preview-container">
      <img id="preview-image" v-if="selectImage != ''" :src="selectImage" />
      <button id="previous" @click="previous">
        <ChevronLeft class="icon" />
      </button>
      <button id="next" @click="next">
        <ChevronRight class="icon" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#project-details-container {
  position: absolute;
  top: 30px;
  left: 50px;
  right: 50px;
  bottom: 30px;
  display: flex;
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

    button#github-btn {
      display: flex;
      width: fit-content;
      padding: 5px;
      cursor: pointer;

      #label {
        margin-left: 4px;
        font-size: 0.9em;
      }
    }

    #screenshots-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
      grid-template-rows: auto;
      gap: 10px;
      flex-grow: 1;
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
    justify-content: center;
    width: 40%;
    padding: 30px 20px;
    background-color: #000;

    &:hover {
      button#previous,
      button#next {
        opacity: 1;
      }
    }

    #preview-image {
      height: auto;
      width: auto;
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
