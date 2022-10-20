import { createRouter, createWebHistory } from "vue-router";
import AllCharacters from "../views/AllCharacters.vue";


const routes = [
  {
    path: "/",
    name: "AllCharacters",
    component: AllCharacters,
  },
  {
    path: '/:pathMatch(.*)*',
    component: AllCharacters
}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

