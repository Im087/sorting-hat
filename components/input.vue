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
      this.$emit('showAnswer', message);

      this.$nuxt.$store.dispatch('answers/setUserName', message);
    }
  }

}
</script>

<style>

</style>