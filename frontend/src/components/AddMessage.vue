<template>
  <div class="msg-box">
    <b-input
      placeholder="Ex: Hello world"
      v-model="message"
      type="textarea"
      class="inp-box"
      maxlength="100"
    >
    </b-input>
    <div class="btn-box">
      <b-button class="btn" @click="addMessage" type="is-success">
        Send
      </b-button>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import io from "socket.io-client";
const socket = io.connect("https://thc-chat-app.herokuapp.com");
import axios from "axios";
export default {
  data() {
    return {
      message: null,
    };
  },
  methods: {
    async addMessage() {
      if (this.message) {
        let { data } = await axios.post("api/messages/create", {
          userName: sessionStorage.getItem("userName"),
          text: this.message,
        });
        this.message = null;
        socket.emit("newMessage", data);
      }
    },
  },
};
</script>

<style scoped>
.btn-box {
  width: 100%;
  text-align: center;
}
.btn {
  width: 40%;
  border-radius: 10px;
}
</style>