import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import axios from "axios";
Vue.use(Buefy)

Vue.config.productionTip = false

const http = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL //http://localhost:3000/api => api
});
console.log(process.env)

Vue.prototype.$http = http;

new Vue({
  render: h => h(App),
}).$mount('#app')
