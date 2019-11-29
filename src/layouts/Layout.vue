<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">Awesome Todo</q-toolbar-title>
        <q-btn
          v-if="!loggedIn"
          to="/auth"
          flat
          class="absolute-right"
          icon-right="account_circle"
          label="Login"
        />
        <q-btn
          v-else
          @click="logoutUser"
          flat
          class="absolute-right"
          icon-right="exit_to_app"
          label="Logout"
        />
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
          :key="nav.label"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="250"
      content-class="bg-primary"
      :breakpoint="767"
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>
        <q-item
          v-for="nav in navs"
          :to="nav.to"
          exact
          clickable
          :key="nav.label"
          class="text-grey-4"
          :active="activeLink === 'nav.label'"
          @click="activeLink = 'nav.label'"
          active-class="menu-active"
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Layout",
  data() {
    return {
      leftDrawerOpen: false,
      activeLink: "",
      navs: [
        {
          label: "Todo",
          icon: "list",
          to: "/"
        },
        {
          label: "Settings",
          icon: "settings",
          to: "/settings"
        }
      ]
    };
  },
  computed: {
    ...mapState("auth", ["loggedIn"])
  },
  methods: {
    ...mapActions("auth", ["logoutUser"])
  }
};
</script>

<style lang='scss'>
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
.q-drawer {
  .q-router-link--exact-active {
    color: white !important;
  }
}
.menu-active {
  border-left: 3px solid white;
}
</style>