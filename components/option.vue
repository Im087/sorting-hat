<template>
  <transition name="slide-left">
    <div v-if="isShown" class="option-container d-flex justify-content-between flex-wrap mx-5" v-aos>
      <b-button class="option-button flex-fill mr-1 mb-2" v-for="(option, index) in data" :key="index" @click="selectOption(option)">
        {{option.title}}
      </b-button>
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
  },
  methods: {
    selectOption(option) {
      // hide this component
      this.isShown = 0;
      // add the selected option to vuex
      this.$nuxt.$store.dispatch('answers/addSelectedOption', option);
      // emit an event with the selected option to the parent component
      this.$emit('showAnswer', option);
    }
  }

}
</script>

<style lang="scss" scoped>
.option-container {

  .option-button {
    background-color: #FFFFFF;
    border-color: $themeColor;
    color: $themeColor;

    &:hover {
      border-color: $accentColor;
      color: $accentColor;
    }
  }
}
</style>