<template>
    <v-app dark>
        <v-app-bar app>
            <v-toolbar-title class="text-uppercase">
                <v-btn text to="/" exact depressed class="headline">
                    <v-icon class="mr-1">home</v-icon>
                    Lartify
                </v-btn>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <div v-if="!isAuthenticated">
                <v-btn text to="login">
                    <span class="mr-2">Login</span>
                </v-btn>
                <v-btn text to="register">
                    <span class="mr-2">Register</span>
                </v-btn>
            </div>
            <div v-if="isAuthenticated">
                <v-btn text @click="logout">
                    <span class="mr-2">logout</span>
                </v-btn>
            </div>
        </v-app-bar>

        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script
    lang="ts">
    import axios from 'axios';
    import { Component, Vue } from 'vue-property-decorator';
    @Component({})
    export default class Lartify extends Vue {
        private name: string = 'Lartify';
        private get isAuthenticated() {
            return this.$store.getters['authModule/isAuthenticated'];
        }

        private logout() {
            axios.post('/api/v1/logout').then(response => {
                this.$store.dispatch('authModule/setToken', undefined);
                this.$router.push('login');
            });
        }

        public created() {
            if (this.$store.state.authModule.token) {
                axios.defaults.headers.common.Authorization = 'Bearer ' + this.$store.state.authModule.token;
            }
            axios.defaults.headers.common.Accept = 'application/json';
            axios.interceptors.response.use(undefined, (error) => {
                if (!axios.isCancel(error)) {
                    if (error.response.status===401) {
                        this.$store.dispatch('authModule/setToken', '');
                        this.$router.push('/login');
                    }
                }
                return Promise.reject(error);
            });
        }
    }
</script>
