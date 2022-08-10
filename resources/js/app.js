import Dashboard from "@/Shared/Dashboard.vue";
import Empty from "@/Shared/Empty.vue";
import { createInertiaApp, Link } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createApp, h } from "vue";
import { createI18n } from "vue-i18n";
import route from "ziggy-js/src/js";
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

await createInertiaApp({
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
    const app = createApp({ render: () => h(App, props) });

    const i18n = createI18n({
      locale: "ja",
      fallbackLocale: "en",
      messages,
    });

    app.config.globalProperties.$route = route;
    app.use(plugin).use(i18n).component("Link", Link).mount(el);
  },
});

InertiaProgress.init({
  color: "blue",
  showSpinner: true,
});
