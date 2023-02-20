import './bootstrap';
import '../css/app.css';

import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/vue3';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
// import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({el, App, props, plugin}) {
        return createApp({render: () => h(App, props)})
            .use(plugin)
            // .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});


// import Dashboard from "@/Shared/Dashboard.vue";
// import Empty from "@/Shared/Empty.vue";
// import {createInertiaApp} from "@inertiajs/vue3";
// import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";
// import {createApp, h} from "vue/dist/vue.esm-bundler";
// import "../css/app.css";
//
// await createInertiaApp({
//     progress: {
//         color: "blue",
//         showSpinner: true,
//     },
//     resolve: async (name) => {
//         const page = (
//             await resolvePageComponent(
//                 `./Pages/${name}.vue`,
//                 import.meta.glob("./Pages/**/*.vue")
//             )
//         ).default;
//         page.layout = name.startsWith("Auth/") ? Empty : page.layout || Dashboard;
//         return page;
//     },
//
//     setup({el, App, props, plugin}) {
//         const app = createApp({render: () => h(App, props)});
//
//         app.config.globalProperties.$route = route;
//     },
// });
