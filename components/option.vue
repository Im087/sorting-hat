<template>
  <div class="option-container d-flex justify-content-between flex-wrap">
    <button class="option-button" v-for="(option, index) in data" :key="index" @click="selectOption(option)">
      {{option.title}}
    </button>
  </div>
</template>

<script>
export default {
  props: ['data', 'author'],
  methods: {
    selectOption(option) {
      // add the selected option to vuex
      this.$nuxt.$store.dispatch('answers/addSelectedOption', option);
      // emit an event with the selected option to the parent component
      this.$emit('showAnswer', option);
    }
  }

}
</script>

<style lang="scss" scoped>

</style>