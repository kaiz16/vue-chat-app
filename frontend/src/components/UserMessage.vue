<template>
  <div class="columns is-vcentered">
    <div class="column is-one-third is-narrow">
      <b-icon icon="account-circle-outline" size="is-medium"></b-icon>
      <p class="title is-7">{{ message.userName }}</p>
    </div>
    <div class="column is-half is-narrow">
      <div class="message">
        <p class="subtitle is-5 has-text-dark">{{ message.text }}</p>
      </div>
      <p class="title is-7">
        {{ message.createdAt ? message.createdAt.substring(0, 10) : "" }}
      </p>
    </div>
    <div class="column is-one-thirds">
      <button class="button is-danger is-rounded mb-5">x</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message"],
};
</script>

<style>
.message {
  height: auto;
  padding: 20px;
  background: #f5f5f5;
  color: white;
  text-align: left;
  border-radius: 10px;
}
</style>