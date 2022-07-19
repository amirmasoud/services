// Application
import Dashboard from "@/Shared/Dashboard.vue";
import Empty from "@/Shared/Empty.vue";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import { createInertiaApp, Link } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";

// Highlight.js Vue plugin
import "highlight.js/styles/stackoverflow-light.css";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createApp, h } from "vue";

import { createI18n } from "vue-i18n";
import "../css/app.css";

const messages = {
  en: {
    message: {
      hello: "hello world",
    },
  },
  ja: {
    message: {
      hello: "こんにちは、世界",
    },
  },
};

createInertiaApp({
  resolve: async (name) => {
    const page = (
      await resolvePageComponent(
        `./Pages/${name}.vue`,
        import.meta.glob("./Pages/**/*.vue")
      )
    ).default;
    page.layout = name.startsWith("Auth/") ? Empty : page.layout || Dashboard;
    return page;
  },

  setup({ el, App, props, plugin }) {
    hljs.registerLanguage("bash", bash);

    const app = createApp({ render: () => h(App, props) });

    const i18n = createI18n({
      locale: "ja", // set locale
      fallbackLocale: "en", // set fallback locale
      messages, // set locale messages
      // If you need to specify other options, you can set other options
      // ...
    });

    app.config.globalProperties.$route = route;
    app
      .use(plugin)
      .use(hljsVuePlugin)
      .use(i18n)
      .component("Link", Link)
      .mount(el);
  },
});

InertiaProgress.init({
  color: "blue",
  showSpinner: true,
});
