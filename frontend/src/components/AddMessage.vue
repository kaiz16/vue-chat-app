<template>
  <div class="box">
    <b-input
      placeholder="Ex: Hello world"
      v-model="message"
      type="textarea"
      maxlength="100"
    >
    </b-input>
    <b-button type="is-primary" @click="addMessage">Send</b-button>
  </div>
</template>

<script>
/* eslint-disable */
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