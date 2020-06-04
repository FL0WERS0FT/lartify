import axios from 'axios';
import {MutationTree} from 'vuex';
import {AuthState} from "@/models/authState";

export const mutations: MutationTree<AuthState> = {
    setToken(state, token: string) {
        state.token = token;

        if (token !== '') {
            axios.defaults.headers.common.Authorization = 'Bearer ' + token;
        } else {
            delete axios.defaults.headers.common.Authorization;
        }
    },
    setErrors(state, errors) {
        state.errors = errors;
    },
};
