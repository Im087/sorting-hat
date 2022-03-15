<template>
  <transition name="slide-left">
    <div v-if="isShown" class="input-container d-flex mb-2 mx-5">
      <b-form-input class="input-field mr-1" type="text" :placeholder="data" required v-model="userName" @keyup.enter="sendMessage(userName)"></b-form-input>
      <b-button class="input-button" @click="sendMessage(userName)">Send</b-button>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['data', 'author'],
  data() {
    return {
      isShown: 0,
      userName: null
    }
  },
  mounted() {
    // when mounted, show the component to activate css transitions
    this.isShown = 1;
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