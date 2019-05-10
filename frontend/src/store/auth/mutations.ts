import {MutationTree} from 'vuex';
import {AuthState} from "@/models/authState";

export const mutations: MutationTree<AuthState> = {
    setToken(state, token: string) {
        state.token = token;
    },
    setErrors(state, errors) {
        state.errors = errors;
    },
};
