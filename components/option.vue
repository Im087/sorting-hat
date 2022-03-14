<template>
  <div v-if="isShown" class="option-container d-flex justify-content-between flex-wrap w-100">
    <b-button class="option-button flex-fill" v-for="(option, index) in data" :key="index" @click="selectOption(option)">
      {{option.title}}
    </b-button>
  </div>
</template>

<script>
export default {
  props: ['data', 'author'],
  data() {
    return {
      isShown: 1
    }
  },
  methods: {
    selectOption(option) {
      // hide this component
      this.isShown = 0;
      // add the selected option to vuex
      this.$nuxt.$store.dispatch('answers/addSelectedOption', option);
      // emit an event with the selected option to the parent component
      this.$emit('showAnswer', option);
    }
  }

}
</script>

<style lang="scss" scoped>
.option-container {

  .option-button {
    background-color: #FFFFFF;
    border-color: $themeColor;
    color: $themeColor;

    &:hover {
      border-color: $accentColor;
      color: $accentColor;
      // background-color: $accentColor;
      // border-color: $accentColor;
      // color: #FFFFFF;
    }

    &:not(:last-child) {
      margin-right: 0.25rem;
    }
  }
}
</style>