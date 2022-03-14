<template>
  <div class="answer-container align-self-end my-2">
    <div class="answer-text py-1 px-2">
      <span>{{data.title || data}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'author'],
  data () {
    return {
      
    }
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
}
</style>