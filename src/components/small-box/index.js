import alteSmallBox from './alteSmallBox.vue';

const components = {
  alteSmallBox,
};

const VuePlugin = {
  install(Vue) {
    Object.keys(components).forEach((component) => {
      Vue.component(component, components[component]);
    });
  },
};

export default VuePlugin;
