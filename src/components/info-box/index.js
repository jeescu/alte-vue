import alteInfoBox from './alteInfoBox.vue';

const components = {
  alteInfoBox,
};

const VuePlugin = {
  install(Vue) {
    Object.keys(components).forEach((component) => {
      Vue.component(component, components[component]);
    });
  },
};

export default VuePlugin;
