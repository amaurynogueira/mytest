import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import Vuex from 'vuex';

import routes from "./routes.js";

Vue.config.productionTip = false;
Vue.use(vuetify);
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
    routes,
});

export const store = new Vuex.Store({
    state: {
        logado: false,
        user: ''
    },
    mutations: {
        changeLog(state, logado){
            state.logado = logado
        },
        changeUser(state, user){
            state.user = user;
        }
    },
    getters: {
        logado: state => state.logado,
        user: state => state.user
    }
}); 


new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount("#app");
