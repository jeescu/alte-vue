<template>
  <alte-aside mini>
    <alte-aside-brand :logo="logo" header="AdminLTE Vue" />

    <alte-aside-container>
      <alte-aside-user :image="avatar" :username="username"/>

      <alte-aside-nav>
        <template v-for="item in menu">
          <alte-aside-nav-header v-if="!item.children && !item.to" :title="item.title" :key="item.title" />
          <alte-aside-nav-item v-if="!item.children && item.to" :title="item.title" :key="item.title" :icon="item.icon" :badge="item.badge" :to="item.to" />
          <alte-aside-nav-item-dropdown v-if="item.children" :key="item.title" :title="item.title" :icon="item.icon">
            <alte-aside-nav-item v-for="submenu in item.children" :key="submenu.title" :title="submenu.title" :icon="submenu.icon" :to="submenu.to" />
          </alte-aside-nav-item-dropdown>
        </template>
      </alte-aside-nav>
    </alte-aside-container>
  </alte-aside>
</template>

<script>
import avatar from 'admin-lte/dist/img/user2-160x160.jpg';
import logo from 'admin-lte/dist/img/AdminLTELogo.png';

export default {
  data() {
    return {
      logo,
      avatar,
      username: 'Alexander Pierce',
      menu: [
        {
          title: 'Dashboard',
          icon: 'tachometer-alt',
          to: '/',
        },
        {
          title: 'Widgets',
          icon: 'th',
          to: '/widgets',
          badge: 'New',
        },
        {
          title: 'UI Elements',
          icon: 'tree',
          children: [
            {
              title: 'General',
              to: '/ui/general',
            },
            {
              title: 'Icons',
              to: '/ui/icons',
            },
            {
              title: 'Buttons',
              to: '/ui/buttons',
            },
          ],
        },
        {
          title: 'EXAMPLES',
        },
        {
          title: 'Pages',
          icon: 'book',
          children: [
            {
              title: 'Login',
              to: '/pages/login',
            },
            {
              title: 'Error 404',
              to: '/404',
            },
          ],
        },
      ],
    };
  },
};
</script>
