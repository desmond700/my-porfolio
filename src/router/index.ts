import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const app_name = "My Portfolio";
const baseUrl = import.meta.env.BASE_URL;
console.log("baseUrl: ", baseUrl);
console.log("import.meta.url: ", import.meta.url);

const routes: Array<RouteRecordRaw> = [
  {
    path: baseUrl,
    redirect: "/about",
  },
  {
    path: "/about",
    name: "about",
    meta: {
      pageTitle: `${app_name} - About Page`,
      pageName: "About Page",
      routeNavPos: 0,
    },
    component: () => import("../views/About.vue"),
  },
  {
    path: "/skills",
    name: "skills",
    meta: {
      pageTitle: `${app_name} - Skills Page`,
      pageName: "Skills Page",
      routeNavPos: 1,
    },
    component: () => import("../views/Skills.vue"),
  },
  {
    path: "/projects",
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
    path: "/:pathMatch(.*)*",
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
