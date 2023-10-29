<script setup lang="ts">
import FilterDropdownList from "../../components/filter-dropdown/FilterDropdownList.vue";
import ProjectItem from "../../components/projects/ProjectItem.vue";
import { type IProject, ProjectFilter } from "@/types";
import flutterProjectsJson from "../../assets/projects_data/flutter_projects.json";
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";
import { cloneDeep } from "lodash";

type Projects = {
  filter: ProjectFilter;
  list: Array<IProject>;
};

const route = useRoute();
const flutterProjects = flutterProjectsJson["flutter_projects"];
const projects = ref<Projects>({
  filter: ProjectFilter.no_filter,
  list: cloneDeep(flutterProjects),
});

const showProjectDetails = ref(false);

const filterList = (filter: ProjectFilter) => {
  console.log("filterList filter: ", filter);
  const { list } = projects.value;
  projects.value = { filter, list: [] };

  switch (filter) {
    case ProjectFilter.no_filter:
      projects.value.list = cloneDeep(flutterProjects);
      break;
    case ProjectFilter.sort_by_az:
      projects.value.list = list.sort((item1, item2) => {
        return item1.projectName.localeCompare(item2.projectName);
      });
      break;
    case ProjectFilter.sort_by_date:
      projects.value.list = list.sort((item1, item2) => {
        const date1 = new Date(item1.created).getTime();
        const date2 = new Date(item2.created).getTime();

        console.log(
          "item1.created - item2.created: ",
          item1.created - item2.created
        );

        return date1 > date2 ? -1 : 1;
      });
      console.log("filterList projects: ", projects.value);
      break;
    default:
      break;
  }
};

watch([
  () => route.query.tag,
  () => route.meta,
  () => route.name,
],([tag, meta, name]) => {
    console.log("query tag: ", tag);
    console.log("meta: ", meta);
    console.log("name: ", name);
    console.log("route: ", route);
    showProjectDetails.value = (meta as any).showProjectDetails;
  }
);

onMounted(() => {
  console.log("ProjectList onMounted");
  // projects.value = {
  //     filter: ProjectFilter.no_filter,
  //     list: flutterProjects
  // };
});

defineExpose({
  showProjectDetails
})
</script>

<template>
  <div id="project-list-page">
    <Teleport to="body">
      <div class="modal-container" v-if="showProjectDetails">
        <router-view></router-view>
      </div>
    </Teleport>
    <div id="project-list-header">
      <p id="project-list-label">Project List</p>
      <div id="navigation-bar">
        <div id="navigation-list">
          <button class="nav-item active">
            <span id="label">All ({{ projects.list.length }})</span>
          </button>
          <!-- <button class="nav-item">
            <span id="label">Recent (0)</span>
          </button> -->
        </div>
        <FilterDropdownList
          :filter="projects.filter"
          @on-filter-change="filterList"
        />
      </div>
    </div>
    <div id="project-list-content">
      <ProjectItem
        v-for="(project, key) in projects.list"
        :project="project"
        :key="key"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#project-list-page {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 30px;

  #project-list-header {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);

    #project-list-label {
      width: fit-content;
      margin: 50px 0 30px 0;
      text-align: left;
      font-size: 2.6em;
      font-weight: bold;
      color: var(--primary-color);
    }

    #navigation-bar {
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      height: 30px;

      #navigation-list {
        display: flex;
        align-items: center;

        .active {
          color: var(--primary-color) !important;
          font-weight: 600 !important;

          &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 3px;
            background-color: var(--primary-color) !important;
          }
        }

        button.nav-item {
          position: relative;
          appearance: none;
          padding: 8px 10px;
          border: none;
          cursor: pointer;
          color: var(--secondar-color);
          background-color: transparent;

          &:focus {
            outline: 0;
          }

          &:hover {
            color: var(--primary-color) !important;
          }

          .label {
            font-size: 0.9em;
            font-weight: bold;
          }
        }
      }
    }
  }

  #project-list-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-template-rows: 150px;
    gap: 10px;
    margin: 40px 0;
  }
}
</style>
