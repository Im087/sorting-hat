<template>
  <div class="question-container">
    Im a question
    <div class="question-text">
      <p>{{data.title}}</p>
    </div>
    <div class="question-additional">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Option from '@/components/option.vue';

export default {
  props: ['data', 'author'],
  components: {
    Option
  },
  created() {
    console.log(this.data, this.author);
  },
  methods: {
    selectOption(option) {
      this.$emit('showAnswer', option);

      this.$nuxt.$store.dispatch('answers/addSelectedOption', option);
    }
  }
}
</script>

<style>

</style>