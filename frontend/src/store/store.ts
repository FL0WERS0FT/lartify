import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import {authModule} from './authModule/index';
import {RootState} from '@/models/rootState';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const mutationList = [
    'authModule/setToken',
];
const vuexPersist = new VuexPersistence<RootState>({
    key: 'lartify-vuex',
    storage: window.localStorage,
    modules: ['authModule'],
    filter: (mutation) => {
        return mutationList.includes(mutation.type);
    },
});

const store: StoreOptions<RootState> = {
    state:{
        version: "1.0.0",
    },
    modules: {
        authModule
    },
    // @ts-ignore
    plugins: [vuexPersist.plugin],
};

export default new Vuex.Store<RootState>(store);
