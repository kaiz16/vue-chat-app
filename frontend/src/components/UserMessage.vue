<template>
  <div class="main">
    <div class="left">
      <b-icon icon="account-circle-outline" size="is-medium"></b-icon>
      <p class="title is-7">{{ message.userName }}</p>
    </div>
    <div class="right">
      <p class="subtitle is-5 has-text-dark text">{{ message.text }}</p>
      <p class="title is-6 is-italic date">{{ transformDateAndTime(message.created_at) }}</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'
export default {
  props: ["message"],
  methods: {
    transformDateAndTime(string){
      var userLocation = moment.tz.guess()
      var parsedTime = moment(string).tz(userLocation).format()
      return moment(parsedTime).calendar()
    }
  }
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  margin: 10px;
  /* align-items: center; */
}

.left{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.right{
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.text{
  width: auto;
  background: whitesmoke;
  padding: 20px;
  border-radius: 10px;
}
</style>