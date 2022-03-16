<template>
  <transition name="slide-left">
    <div v-if="isShown" class="question-container align-self-start d-flex my-2" v-aos>
      <div class="question-author flex-shrink-0">?</div>
      <div class="question-text py-1 px-2 mr-5">
        <span>{{data.title}}</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['data', 'author'],
  data() {
    return {
      isShown: 0
    }
  },
  mounted() {
    // when mounted, show the component to activate css transitions
    this.isShown = 1;
  }
}
</script>

<style lang="scss" scoped>
.question-container {

  .question-author {
    background-color: $secondaryColor;
    color: #FFFFFF;
    border: $secondaryColor 2px solid;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    font-size: 20px;
    text-align: center;
    margin-right: 0.75rem;
  }

  .question-text {
    background-color: #FFFFFF;
    color: $fontColor;
    border: $themeColor 2px solid;
    border-radius: 0.5rem 0.5rem 0.5rem 0;
  }
}

</style>