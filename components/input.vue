<template>
  <div class="input-container d-flex ">
    <b-form-input :id="data" type="text" :placeholder="data" required v-model="userName"></b-form-input>
    <b-button @click="sendMessage(userName)">Send</b-button>
  </div>
</template>

<script>
export default {
  props: ['data', 'author'],
  data() {
    return {
      userName: null
    }
  },
  methods: {
    sendMessage(message) {
      // add the input message to vuex
      this.$nuxt.$store.dispatch('answers/setUserName', message);
      // emit an event with the input message to the parent component
      this.$emit('showAnswer', message);
    }
  }

}
</script>

<style>

</style>