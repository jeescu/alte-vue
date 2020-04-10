import alteContent from './alteContent.vue';
import alteFooter from './alteFooter.vue';
import alteHeader from './alteHeader.vue';
import alteLayoutPage from './alteLayoutPage.vue';
import alteLayoutLogin from './alteLayoutLogin.vue';

const components = {
  alteContent,
  alteFooter,
  alteHeader,
  alteLayoutPage,
  alteLayoutLogin,
};

const VuePlugin = {
  install(Vue) {
    Object.keys(components).forEach((component) => {
      Vue.component(component, components[component]);
    });
  },
};

export default VuePlugin;
