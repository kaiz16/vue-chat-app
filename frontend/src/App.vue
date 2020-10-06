<template>
  <div id="app">
    <SignUp v-if="!isVerified" @verifyUser="userCreated" />
    <Chats v-if="isVerified" />
  </div>
</template>

<script>
import SignUp from "./components/SignUp";
import Chats from "./components/Chats";
export default {
  name: "App",
  data() {
    return {
      isVerified: null,
      userName: "",
    };
  },
  components: {
    SignUp,
    Chats,
  },
  async mounted() {
    if (sessionStorage.getItem("userName")) {
      this.isVerified = true;
      this.userName = sessionStorage.getItem("userName");
    } else {
      console.log("NOt verified");
    }
  },
  methods: {
    userCreated(userName) {
      this.isVerified = true;
      this.userName = userName;
      sessionStorage.setItem("userName", userName);
    },
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
  padding: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: auto;
  color: #2c3e50;
}
</style>
