<template>
  <div class="answer-container">
    Im a answer
    <div class="answer-text">
      <p>{{data.title}}</p>
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

<style>

</style>