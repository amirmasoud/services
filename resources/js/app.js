// Application
import { createApp, h } from 'vue';
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Dashboard from '@/Shared/Dashboard';
import Empty from '@/Shared/Empty';

// Highlight.js Vue plugin
import 'highlight.js/styles/stackoverflow-light.css';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import hljsVuePlugin from "@highlightjs/vue-plugin";

createInertiaApp({
    resolve: async name => {
        const page = (await import(`./Pages/${name}`)).default;
        page.layout = name.startsWith('Auth/') ? Empty : page.layout || Dashboard;
        return page;
    },

    setup({ el, App, props, plugin }) {
        app.config.globalProperties.$route = route;
        hljs.registerLanguage('bash', bash);
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(hljsVuePlugin)
            .component("Link", Link)
            .mount(el);
    },
});

InertiaProgress.init({
    color: 'blue',
    showSpinner: true,
});
