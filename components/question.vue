<template>
  <div class="question-container align-self-start my-2">
    <div class="question-text py-1 px-2">
      <span>{{data.title}}</span>
    </div>
  </div>
</template>

<script>

export default {
  props: ['data', 'author'],
}
</script>

<style lang="scss" scoped>
.question-container {

  .question-text {
    background-color: #FFFFFF;
    color: $fontColor;
    border: $themeColor 2px solid;
    border-radius: 0.5rem 0.5rem 0.5rem 0;
  }
}

</style>