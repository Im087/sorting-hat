<template>
  <div class="option-container d-flex justify-content-between flex-wrap">
    <button class="option-button" v-for="(option, index) in data" :key="index" @click="selectOption(option)">
      {{option.title}}
    </button>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    selectOption(option) {
      this.$emit('showAnswer', option);

      this.$nuxt.$store.dispatch('answers/addSelectedOption', option);
    }
  }

}
</script>

<style lang="scss" scoped>

</style>