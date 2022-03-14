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

export default {
  props: ['data', 'author'],
}
</script>

<style>

</style>