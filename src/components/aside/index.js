import alteAside from './alteAside.vue';
import alteAsideBrand from './alteAsideBrand.vue';
import alteAsideContainer from './alteAsideContainer.vue';
import alteAsideNav from './alteAsideNav.vue';
import alteAsideNavHeader from './alteAsideNavHeader.vue';
import alteAsideNavItem from './alteAsideNavItem.vue';
import alteAsideNavItemDropdown from './alteAsideNavItemDropdown.vue';
import alteAsideUser from './alteAsideUser.vue';
import directives from './directives';

const components = {
  alteAside,
  alteAsideBrand,
  alteAsideContainer,
  alteAsideNav,
  alteAsideNavHeader,
  alteAsideNavItem,
  alteAsideNavItemDropdown,
  alteAsideUser,
};

const VuePlugin = {
  install(Vue) {
    Object.keys(components).forEach((component) => {
      Vue.component(component, components[component]);
    });

    Object.keys(directives).forEach((directive) => {
      Vue.directive(directive, directives[directive]);
    });
  },
};

export default VuePlugin;
