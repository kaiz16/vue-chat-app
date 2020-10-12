<template>
  <b-input
    placeholder="Ex: Hello world"
    v-model="message"
    type="textarea"
    @keyup.enter.native="addMessage()"
    custom-class="input"
    maxlength="100"
  >
  </b-input>
</template>

<script>
/*eslint-disable*/
import io from "socket.io-client";
const socket = io.connect("https://thc-chat-app.herokuapp.com");
import axios from "axios";
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    async addMessage() {
      if (this.message) {
        let { data } = await axios.post("api/messages/create", {
          userName: sessionStorage.getItem("userName"),
          text: this.message,
        });
        this.message = "";
        socket.emit("newMessage", data);
      }
    },
  },
};
</script>

<style>
</style>