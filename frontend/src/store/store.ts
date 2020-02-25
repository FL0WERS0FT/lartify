import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import {auth} from './auth/index';
import {RootState} from "@/models/rootState";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const mutationList = [
    'auth/setToken',
];
const vuexPersist = new VuexPersistence<RootState>({
    key: 'lartify-vuex',
    storage: window.localStorage,
    modules: ['auth', 'user'],
    filter: (mutation) => {
        return mutationList.includes(mutation.type);
    },
});

const store: StoreOptions<RootState> = {
    state:{
        version: "1.0.0",
    },
    modules: {
        auth
    },
    plugins: [vuexPersist.plugin],
};

export default new Vuex.Store<RootState>(store);
