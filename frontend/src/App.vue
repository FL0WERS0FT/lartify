<template>
    <v-app dark>
        <v-toolbar app>
            <v-toolbar-title class="text-uppercase">
                <v-btn flat to="/" exact depressed class="headline">
                    <v-icon class="mr-1">home</v-icon>
                    Lartify
                </v-btn>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <div v-if="!isAuthenticated">
                <v-btn flat to="login">
                    <span class="mr-2">Login</span>
                </v-btn>
                <v-btn flat to="register">
                    <span class="mr-2">Register</span>
                </v-btn>
            </div>
            <div v-if="isAuthenticated">
                <v-btn flat @click="logout">
                    <span class="mr-2">logout</span>
                </v-btn>
            </div>
        </v-toolbar>

        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
  import {mapGetters} from 'vuex';
  import axios from 'axios';

  export default {
    name: 'Lartify',
    components: {},
    data() {
      return {
        //
      };
    },
    methods: {
      logout() {
        axios.post('/api/v1/logout').then(response => {
          this.$store.dispatch('auth/setToken', undefined);
          this.$router.push({
            name: 'home'
          });
        });
      },
    },
    computed: {
      ...mapGetters({
        isAuthenticated: 'auth/isAuthenticated',
      }),
    },
  };
</script>
