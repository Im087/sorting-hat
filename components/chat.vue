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
import Input from '@/components/input.vue';

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
    Input
  },
  mounted() {
    this.appendQuestion({
      title: 'What is your name?',
      placeholder: 'Name'
    }, 'input');
  },
  methods: {
    appendQuestion(question, type) {
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

      if(type == 'mcq') {
        this.questionIndex++;
        // append options to the question
        this.appendOption(question.answers, questionComp.$el);
      } else if (type == 'input') {
        // append input to the question
        this.appendInput(question.placeholder, questionComp.$el);
      }
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
    appendOption(answers, comp) {
      // create a subclass of the base Vue constructor
      let optionClass = Vue.extend(Option);
      // create an instance of question component
      let optionComp = new optionClass({
        propsData: {
          data: answers,
          author: 'chatbot'
        }
        }).$on('showAnswer', this.showAnswer).$mount();
      // append the component manually to the target element
      comp.appendChild(optionComp.$el);
    },
    appendInput(placeholder, comp) {
      // create a subclass of the base Vue constructor
      let inputClass = Vue.extend(Input);
      // create an instance of question component
      let inputComp = new inputClass({
        propsData: {
          data: placeholder,
          author: 'chatbot'
        }
        }).$on('showAnswer', this.showAnswer).$mount();
      // append the component manually to the target element
      comp.appendChild(inputComp.$el);
    },
    showAnswer(answer) {
      this.appendAnswer(answer);
      if(this.questionIndex < this.questionData.length) {
        // if there are more questions, append the next question
        this.appendQuestion(this.questionData[this.questionIndex], 'mcq');
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