import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import detectEthereumProvider from '@metamask/detect-provider';

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state,
    getters: {
        isCorrectNetwork: state => {
            return state.networkId == 0xf2c2a0839
        }
    },
    mutations: {
        registerChainId (state, chainId) {
            state.networkId = chainId;
        }
    },
    actions: {
        registerWeb3 ({commit}) {
            window.ethereum.autoRefreshOnNetworkChange = true;
            console.log('registerWeb3 Action being executed')
            detectEthereumProvider().then(provider => {
                console.log("Ethereum provider: ", provider);
            })
            window.ethereum.request({ method: 'eth_chainId' }).then(result => {
                commit("registerChainId", result)
            })
        }
    }
})
