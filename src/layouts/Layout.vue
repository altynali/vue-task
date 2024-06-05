<template>
  <v-app-bar app color="primary">
    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Ferda</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu offset-y v-model="menuVisible">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          <v-list-item-avatar>
            <v-icon>mdi-account</v-icon>
          </v-list-item-avatar>
          <span class="d-none d-sm-flex">{{ user.name }}</span>
          <v-icon right>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="openProfile" class="d-flex align-center">
          <v-list-item-avatar>
            <v-icon>mdi-account</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ user.name }}</v-list-item-title>
            <v-list-item-subtitle>admin</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="logout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title>Registry</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      drawer: false,
      menuVisible: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    openProfile() {
      this.menuVisible = false;
    },
    logout() {
      this.menuVisible = false;
    }
  }
};
</script>
