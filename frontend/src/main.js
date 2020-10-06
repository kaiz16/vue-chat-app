import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import io from "socket.io-client";
import axios from 'axios'

axios.defaults.baseUrl = 'api'

Vue.use(Buefy)
Vue.config.productionTip = false

const socket = io.connect('http://localhost:5000')
Vue.prototype.$socket = socket
new Vue({
  render: h => h(App),
}).$mount('#app')
