<template>
  <div v-if="isShown" class="input-container d-flex mb-3 w-100">
    <b-form-input class="input-field mr-1" type="text" :placeholder="data" required v-model="userName" @keyup.enter="sendMessage(userName)"></b-form-input>
    <b-button class="input-button" @click="sendMessage(userName)">Send</b-button>
  </div>
</template>

<script>
export default {
  props: ['data', 'author'],
  data() {
    return {
      isShown: 1,
      userName: null
    }
  },
  methods: {
    sendMessage(message) {
      // hide this component
      this.isShown = 0;
      // add the input message to vuex
      this.$nuxt.$store.dispatch('answers/setUserName', message);
      // emit an event with the input message to the parent component
      this.$emit('showAnswer', message);
    }
  }

}
</script>

<style lang="scss" scoped>
.input-container {

  .input-field {
    border-color: $themeColor;
  }

  .input-button {
    background-color: $themeColor;
    border-color: $themeColor;

    &:hover {
      background-color: $accentColor;
      border-color: $accentColor;
    }
  }
}
</style>