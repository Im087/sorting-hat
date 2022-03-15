<template>
  <transition name="slide-right">
    <div v-if="isShown" class="answer-container align-self-end d-flex my-2">
      <div class="answer-text py-1 px-2 ml-5">
        <span>{{data.title || data}}</span>
      </div>
      <div class="answer-author flex-shrink-0">{{answers.userName.substr(0, 1).toUpperCase()}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['data', 'author'],
  data () {
    return {
      isShown: 0
    }
  },
  computed: {
    answers() {
      return this.$nuxt.$store.getters['answers/getAnswers'];
    }
  },
  mounted() {
    // when mounted, show the component to activate css transitions
    this.isShown = 1;
  }

}
</script>

<style lang="scss" scoped>
.answer-container {

  .answer-text {
    background-color: $themeColor;
    color: #FFFFFF;
    border: $themeColor 2px solid;
    border-radius: 0.5rem 0.5rem 0 0.5rem;
  }

  .answer-author {
    background-color: $secondaryColor;
    color: #FFFFFF;
    border: $secondaryColor 2px solid;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    font-size: 20px;
    text-align: center;
    margin-left: 0.75rem;
  }
}
</style>