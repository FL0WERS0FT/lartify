import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import {auth} from './auth/index';
import {RootState} from "@/models/rootState";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state:{
        version: "1.0.0",
    },
    modules: {
        auth
    }
};

export default new Vuex.Store<RootState>(store);
