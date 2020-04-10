import alteBreadcrumbs from './alteBreadcrumbs.vue';

const components = {
  alteBreadcrumbs,
};

const VuePlugin = {
  install(Vue) {
    Object.keys(components).forEach((component) => {
      Vue.component(component, components[component]);
    });
  },
};

export default VuePlugin;
