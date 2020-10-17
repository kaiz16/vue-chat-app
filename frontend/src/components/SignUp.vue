<template>
  <div class="main">
    <div class="navbar-custom">
      <p class="nav-item" @click="isRegistered = true">Sign In</p>
      <p class="nav-item" @click="isRegistered = false">Sign Up</p>
    </div>
    <div class="custom">
      <div>
        <b-field class="inp" label="Username" label-position="on-border">
          <b-input value="ex: johnsilver" v-model="username" maxlength="10">
          </b-input>
        </b-field>
        <p class="control">
          <b-button
            @click="[isRegistered ? signIn() : signUp()]"
            type="is-success"
          >
            {{ isRegistered ? "Sign In" : "Sign Up" }}
          </b-button>
        </p>
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
      isRegistered: true,
      username: null,
      isUserExist: false,
      isUserInValid: false,
    };
  },
  methods: {
    async signUp() {
      if (this.username) {
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
      }
    },
    async signIn() {
      if (this.username) {
        this.isUserExist = false;
        let { data } = await axios.get(`/api/users/${this.username}`);
        if (data) {
          sessionStorage.setItem("userName", data.userName);
          this.$emit("verify");
        } else {
          this.isUserInValid = true;
        }
      }
    },
  },
};
</script>

<style>
.main {
  width: 100%;
  height: 100vh;
}
.navbar-custom {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 5vw;
  width: 100%;
  height: 15vh;
  align-items: center;
  background-color: #090a29;
}
.nav-item {
  color: aliceblue;
  margin-left: 5vw;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
}
.nav-item:hover {
  color: aqua;
}
.custom {
  margin: auto auto;
  margin-top: 25vh;
  width: 50%;
  padding: 40px 10px 10px 10px;
  text-align: center;
  box-shadow: 5px 5px 10px 2px grey;
}
.inp {
  text-align: center;
  margin: 0px auto;
  width: 80%;
}
.alert {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}
@media only screen and (max-width: 790px) {
  .inp,
  .custom {
    width: 90%;
  }
  .navbar-custom {
    justify-content: space-around;
  }
  .nav-item {
    font-size: 16px;
  }
}
</style>