<template>
  <div class="parent-div">
    <div class="columns is-centered is-vcentered" style="min-height: 100%">
      <div class="column is-half">
        <b-field label="Username" label-position="on-border">
          <b-input
            expanded
            value="ex: johnsilver"
            v-model="username"
            maxlength="10"
          ></b-input>
          <p class="control">
            <b-button @click="signUp" type="is-primary">Sign Up</b-button>
          </p>
          <p class="control">
            <b-button @click="signIn" type="is-success">Sign In</b-button>
          </p>
        </b-field>
      </div>
      <br />
    </div>
    <div v-if="isUserExist" class="alert">
      <b-message type="is-danger"> User Already Exist !! </b-message>
    </div>
    <div v-if="isUserInValid" class="alert">
      <b-message type="is-danger"> User Does not Exist !! </b-message>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: null,
      isUserExist: false,
      isUserInValid: false,
    };
  },
  methods: {
    signUp() {
      this.isUserInValid = false;
      axios
        .post("https://thc-chat-app.herokuapp.com/users/create", {
          userName: this.username,
        })
        .then((res) => this.$emit("verifyUser", res.data.userName))
        .catch(() => (this.isUserExist = true));
    },
    async signIn() {
      console.log(process.env.PORT);
      this.isUserExist = false;
      let { data } = await axios.get(
        `https://thc-chat-app.herokuapp.com/users/${this.username}`
      );
      if (data) return this.$emit("verifyUser", data.userName);
      else return (this.isUserInValid = true);
    },
  },
};
</script>

<style>
.parent-div {
  margin-top: 15%;
}
.alert {
  width: 100%;
  display: flex;
  justify-content: center;
}
.alertText {
  width: 30%;
}
</style>