import {GetterTree} from 'vuex';
import {AuthState} from "@/models/authState";
import {RootState} from "@/models/rootState";

export const getters: GetterTree<AuthState, RootState> = {
    isAuthenticated: state => {
        return (state.token !== undefined);
    }
};
