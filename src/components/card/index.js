import alteCardOverlay from './alteCardOverlay.vue';
import alteCardTitle from './alteCardTitle.vue';
import alteCardTools from './alteCardTools.vue';

const components = {
  alteCardOverlay,
  alteCardTitle,
  alteCardTools,
};

const VuePlugin = {
  install(Vue) {
    Object.keys(components).forEach((component) => {
      Vue.component(component, components[component]);
    });
  },
};

export default VuePlugin;
