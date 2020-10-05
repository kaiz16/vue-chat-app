import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
// import socketio from 'socket.io';
// import VueSocketIO from 'vue-socket.io';

// const SocketInstance = socketio('http://localhost:5000');

// Vue.use(VueSocketIO, SocketInstance)

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
