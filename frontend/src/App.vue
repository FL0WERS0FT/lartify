<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Lartify</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        to="login"
      >
        <span class="mr-2">Login</span>
      </v-btn>
      <v-btn
        flat
        to="register"
      >
        <span class="mr-2">Register</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Lartify',
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>
