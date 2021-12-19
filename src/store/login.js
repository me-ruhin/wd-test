import { url } from "./url";
import axios from "axios"
export const login = {
    namespaced: true,
    state: {
        hasLogged: false,
        loggedUser: {},
        tokenStatus: false,
        roleId: '',
        loginError:{}
    },
    getters: {
        loggedError(state){
            return state.loginError
        },
        loginStatus(state){
            return state.hasLogged
        }

    },
    mutations: {
        saveLoggedData(state, payload) {
            if(payload && payload.data){
                state.loggedUser= payload.data
                state.hasLogged = true
                state.roleId = payload.data.role_id
                localStorage.setItem('loggedData',JSON.stringify(payload.data))
            }

        },
        saveLoginError(state, payload) {
            console.log(payload);
            if (payload.length > 0) {
                state.loginError = payload
                state.hasLogged = false 
            }

        }
    },
    actions: {
        async userLogin(context, payload) {

            try {
                let result = await axios.post(`${url}/login`, payload)

                console.log(result.data)

                context.commit('saveLoggedData', result.data)
            }
            catch (err) {
                context.commit('saveLoginError', err.response.data)
            }
        },

    }
}