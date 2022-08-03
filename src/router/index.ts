import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const app_name = "My Portfolio";
const baseUrl = import.meta.env.BASE_URL;

const routes: Array<RouteRecordRaw> = [
  {
    path: baseUrl,
    redirect: baseUrl + "about",
  },
  {
    path: baseUrl + "about",
    name: "about",
    meta: {
      pageTitle: `${app_name} - About Page`,
      pageName: "About Page",
      routeNavPos: 0,
    },
    component: () => import("../views/About.vue"),
  },
  {
    path: baseUrl + "skills",
    name: "skills",
    meta: {
      pageTitle: `${app_name} - Skills Page`,
      pageName: "Skills Page",
      routeNavPos: 1,
    },
    component: () => import("../views/Skills.vue"),
  },
  {
    path: baseUrl + "projects",
    name: "projects",
    meta: {
      showProjectDetails: false,
      pageTitle: `${app_name} - Projects Page`,
      pageName: "Projects Page",
      routeNavPos: 2,
    },
    component: () => import("../views/project/ProjectList.vue"),
  },
  {
    path: baseUrl + ":pathMatch(.*)*",
    name: "NotFound",
    meta: {
      pageTitle: `${app_name} - Page not found`,
      pageName: "Page not found",
      routeNavPos: -1,
    },
    component: () => import("../views/PageNotFound.vue"),
  },
]; // short for `routes: routes`

const router = createRouter({
  history: createWebHistory(baseUrl),
  routes,
});

router.beforeEach((to: any, from: any, next: any) => {
  document.title = to.meta.pageTitle;
  next();
});

export default router;
