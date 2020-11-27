import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [],
        auth: false,
        account: {
            user: '',
            pass: ''
        },

        formDefault : {
            email: '',
            name: '',
            food: null,
            checked: []
        }
    },
    getters: {
        getAuth: state => {
            return state.auth
        }
    },

    actions: {
        login: (context, data) => {
            context.commit('LOGIN', data)
        },

        logout: ({commit}) => {
            commit('LOGOUT')
        },

        async getPost({commit}) {
            const response = await axios.get('http://newsapi.org/v2/everything?q=apple&from=2020-11-24&to=2020-11-24&sortBy=popularity&apiKey=1c944047a36c43e18a7df1e01d226c40');
            commit('GET_POST', response.data.articles)
        },

        checkAuth: ({commit}) => {
            let account = JSON.parse(localStorage.getItem('account'))

            if (account.user !== '' && account.pass !== '') {
                commit('CHECK_AUTH', true)
            }
        }
    },

    mutations: {
        LOGIN: (state, data) => {
            state.account = data

            if (data.user === 'test@gmail.com' && data.pass === '123456') {
                state.auth = true
            }
        },

        LOGOUT: (state) => {
            state.account.user = ''
            state.account.pass = ''
            state.auth = false
            localStorage.removeItem('account')
            localStorage.setItem('account', JSON.stringify(state.account))
        },

        GET_POST: (state, data) => {
            state.posts = data
        },

        CHECK_AUTH: (state, auth) => {
            state.auth = auth
        }
    },
});
