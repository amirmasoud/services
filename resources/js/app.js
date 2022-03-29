// Application
import Dashboard from "@/Shared/Dashboard";
import Empty from "@/Shared/Empty";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import { createInertiaApp, Link } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";

// Highlight.js Vue plugin
import "highlight.js/styles/stackoverflow-light.css";
import { createApp, h } from "vue";

createInertiaApp({
  resolve: async (name) => {
    const page = (await import(`./Pages/${name}`)).default;
    page.layout = name.startsWith("Auth/") ? Empty : page.layout || Dashboard;
    return page;
  },

  setup({ el, App, props, plugin }) {
    hljs.registerLanguage("bash", bash);

    const app = createApp({ render: () => h(App, props) });

    // eslint-disable-next-line no-undef
    app.config.globalProperties.$route = route;
    app.use(plugin).use(hljsVuePlugin).component("Link", Link).mount(el);
  },
});

InertiaProgress.init({
  color: "blue",
  showSpinner: true,
});
