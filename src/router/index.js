import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Upcoming from "../views/Upcoming.vue";
import TopRated from "../views/TopRated.vue";
import Popular from "../views/Popular.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/upcoming",
        name: "Upcoming",
        component: Upcoming,
    },
    {
        path: "/top-rated",
        name: "TopRated",
        component: TopRated,
    },
    {
        path: "/popular",
        name: "Popular",
        component: Popular,
    },
    {
        path: "*",
        name: "PageNotFound",
        component: PageNotFound,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;