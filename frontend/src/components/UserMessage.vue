<template>
  <div class="main">
    <div class="username">
      <b-icon icon="account-circle-outline" size="is-medium"></b-icon>
      <p class="name">{{ message.userName }}</p>
    </div>
    <div class="message">
      <p class="text">{{ message.text }}</p>
      <p class="date">
        {{ transformDateAndTime(message.createdAt) }}
      </p>
    </div>
    <div :class="['btn', userName === message.userName ? 'visible' : 'hide']">
      <button
        class="button is-danger is-rounded mb-5"
        @click="deleteMessage(message._id)"
      >
        x
      </button>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
const socket = io.connect("https://thc-chat-app.herokuapp.com");
import moment from "moment-timezone";
import axios from "axios";
export default {
  props: ["message"],
  data() {
    return {
      userName: sessionStorage.getItem("userName"),
    };
  },
  methods: {
    transformDateAndTime(string) {
      var userLocation = moment.tz.guess();
      var parsedTime = moment(string).tz(userLocation).format();
      return moment(parsedTime).calendar();
    },
    async deleteMessage(_id) {
      await axios.delete(`api/messages/delete/${_id}`);
      socket.emit("deleteMessage", _id);
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  margin: 10px;
  align-items: center;
}
.username {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.message {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 3;
  align-items: center;
  margin-right: 10px;
  border-radius: 10px;
  padding: 5px 50px 0px 5px;
  min-height: 40px;
}
.btn {
  display: flex;
  flex: 1;
}
.date {
  font-weight: bold;
}
.visible {
  visibility: visible;
}
.hide {
  visibility: hidden;
}
button:hover {
  transition: 3s;
  transform: rotateZ(360deg);
}
@media only screen and (max-width: 790px) {
  .main {
    margin: 1px 2px;
    font-size: 12px;
  }
  .date {
    font-size: 12px;
  }
  .visible {
    display: auto;
  }
  .hide {
    display: hidden;
  }
}
</style>