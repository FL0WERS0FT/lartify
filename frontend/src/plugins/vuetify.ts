import Vuetify from "vuetify";
import de from "vuetify/src/locale/de";
import en from "vuetify/src/locale/en";
import Vue from "vue";

const vuetifyOpts = {
    lang: {
        locales: {
            de,
            en
        },
        current: 'de',
    },
    theme: {
        dark: true
    },
    icons: {
        iconfont: 'mdiSvg'
    }
};

Vue.use(Vuetify);

// @ts-ignore
export default new Vuetify(vuetifyOpts)
