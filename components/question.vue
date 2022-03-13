<template>
  <div class="question-container">
    Im a question
    <div class="question-text">
      <p>{{data.title}}</p>
    </div>
    <div class="question-options">
      <ul>
        <li @click="selectOption(data.answers[0])">{{data.answers[0].title}}</li>
        <li @click="selectOption(data.answers[1])">{{data.answers[1].title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'author'],
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