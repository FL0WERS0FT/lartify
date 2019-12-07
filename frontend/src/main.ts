import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store/store'
import './registerServiceWorker';
import 'vuetify/dist/vuetify.min.css';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    store,
    render: (h: any) => h(App),
}).$mount('#app');
