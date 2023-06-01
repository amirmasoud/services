import './bootstrap';
import '../css/app.css';

import {createApp, h} from 'vue';
import {createInertiaApp, Link} from '@inertiajs/vue3';
import Empty from "@/Components/Empty.vue";
import Dashboard from "@/Shared/Dashboard.vue";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', {eager: true})
        let page = pages[`./Pages/${name}.vue`]
        page.default.layout = name.startsWith("Auth/") ? Empty : page.default.layout || Dashboard
        return page
    },
    setup({el, App, props, plugin}) {
        return createApp({render: () => h(App, props)})
            .use(plugin)
            .component("Link", Link)
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
