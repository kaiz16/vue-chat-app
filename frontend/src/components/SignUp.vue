<template>
  <div class="parent-div">
    <div class="columns is-centered is-vcentered" style="min-height: 100%">
      <div class="column is-half">
        <b-field class="inp" label="Username" label-position="on-border">
          <b-input value="ex: johnsilver" v-model="username" maxlength="10">
          </b-input>
        </b-field>
        <div class="btn-group">
          <p class="control">
            <b-button @click="signUp" type="is-primary">Sign Up</b-button>
          </p>
          <p class="control">
            <b-button @click="signIn" type="is-success">Sign In</b-button>
          </p>
        </div>
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
    async signUp() {
      this.isUserInValid = false;
      try {
        const { data } = await axios.post("/api/users/create", {
          userName: this.username,
        });
        sessionStorage.setItem("userName", data.userName);
        this.$emit("verify");
      } catch {
        this.isUserExist = true;
      }
    },
    async signIn() {
      this.isUserExist = false;
      let { data } = await axios.get(`/api/users/${this.username}`);
      if (data) {
        sessionStorage.setItem("userName", data.userName);
        this.$emit("verify");
      } else {
        this.isUserInValid = true;
      }
    },
  },
};
</script>

<style>
.parent-div {
  margin-top: 15%;
}
.btn-group {
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.inp {
  margin: 0 auto;
  width: 60%;
}
@media only screen and (max-width: 790px) {
  .inp {
    width: 80%;
  }
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