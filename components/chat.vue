<template>
  <b-container class="chat-container h-100 w-100">
    <div class="chat-box" ref="chat-box">
    </div>
  </b-container>
  
</template>

<script>
import Vue from 'vue';
import questionData from '@/assets/json/sorting_hat.json';

import Question from '@/components/question.vue';
import Answer from '@/components/answer.vue';
import Option from '@/components/option.vue';

export default {
  data() {
    return {
      questionData,
      questionIndex: 0,
    }
  },
  components: {
    Question,
    Answer,
    Option,
  },
  mounted() {
    this.appendQuestion(this.questionData[this.questionIndex]);
  },
  methods: {
    appendQuestion(question) {
      // create a subclass of the base Vue constructor
      let questionClass = Vue.extend(Question);
      // create an instance of question component
      let questionComp = new questionClass({
        propsData: {
          data: question,
          author: 'chatbot'
        }
        }).$mount();
      // append the component manually to the target element
      this.$refs['chat-box'].appendChild(questionComp.$el);

      this.questionIndex++;
      // append options to the question
      this.appendOption(questionComp.$el, question.answers);
    },
    appendAnswer(answer) {
      // create a subclass of the base Vue constructor
      let answerClass = Vue.extend(Answer);
      // create an instance of answer component
      let answerComp = new answerClass({
        propsData: {
          data: answer,
          author: 'user'
        }
        }).$mount();
      // append the component manually to the target element
      this.$refs['chat-box'].appendChild(answerComp.$el);
    },
    appendOption(comp, answers) {
      // create a subclass of the base Vue constructor
      let optionClass = Vue.extend(Option);
      // create an instance of question component
      let optionComp = new optionClass({
        propsData: {
          data: answers,
        }
        }).$on('showAnswer', this.showAnswer).$mount();
      // append the component manually to the target element
      comp.appendChild(optionComp.$el);
    },
    showAnswer(answer) {
      this.appendAnswer(answer);
      if(this.questionIndex < this.questionData.length) {
        // if there are more questions, append the next question
        this.appendQuestion(this.questionData[this.questionIndex]);
      } else {
        // if there is no more question, calculate the final scores and get the house
        this.$nuxt.$store.dispatch('answers/setScores');
        this.$nuxt.$store.dispatch('answers/setHouse');
        let house = this.$nuxt.$store.getters['answers/getHouse'];
        console.log('house', house);
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.chat-container {
  background-color: aquamarine;
}

</style>