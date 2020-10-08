<template>
  <div class="chats" style="max-width: 500px; margin: 0 auto">
    <div class="columns">
      <div class="column is-full">
        <UserMessage
          v-for="message in messages"
          :key="message._id"
          :message="message"
        />
      </div>
    </div>
    <div class="div"></div>
    <div class="add-message">
      <AddMessage />
    </div>
  </div>
</template>

<script>
// import io from "socket.io-client";
// const socket = io.connect("http://localhost:5000");
import axios from "axios";
import UserMessage from "./UserMessage.vue";
import AddMessage from "./AddMessage.vue";
export default {
  components: {
    UserMessage,
    AddMessage,
  },
  data() {
    return {
      messages: [], // Array of messages,
    };
  },
  async mounted() {
    let { data } = await axios.get("api/messages");
    this.messages = data;
  },
  created() {
    // socket.on("addMessage", (message) => {
    // this.messages.push(message);
    // });
  },
};
</script>

<style>
.add-message {
  position: fixed;
  bottom: 0;
  width: 500px;
  padding: 0;
}
.div {
  height: 300px;
}
</style>