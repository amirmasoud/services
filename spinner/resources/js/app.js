import { createApp, h } from 'vue';
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Dashboard from '@/Shared/Dashboard';
import Empty from '@/Shared/Empty';

createInertiaApp({
    resolve: async name => {
        const page = (await import(`./Pages/${name}`)).default;
        page.layout = name.startsWith('Auth/') ? Empty : page.layout || Dashboard;
        return page;
    },

    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Link", Link)
            .mount(el);
    },
});

InertiaProgress.init({
    color: 'blue',
    showSpinner: true,
});
