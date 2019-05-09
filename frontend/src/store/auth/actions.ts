import {ActionTree} from 'vuex';
import {AuthState} from "@/models/authState";
import {RootState} from "@/models/rootState";


export const actions: ActionTree<AuthState, RootState> = {
    setToken({commit}, token: string): any {
        commit('setToken', token);
    }
};
