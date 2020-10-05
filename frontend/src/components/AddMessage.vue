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
        let { data } = await axios.post(
          "http://localhost:5000/messages/create",
          {
            userName: sessionStorage.getItem("userName"),
            text: this.message,
          }
        );
        this.message = "";
        this.$emit("addMessage", data);
      }
    },
  },
};
</script>

<style>
</style>