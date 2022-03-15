<template>
  <b-container class="chat-container h-100 w-100 py-5">
    <div class="chat-box d-flex flex-column" ref="chat-box">
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
      placeholder: 'Enter your name'
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
        // append options after the question
        this.appendOption(question.answers);
      } else if (type == 'input') {
        // append input after the question
        this.appendInput(question.placeholder);
      }

      console.log(document.documentElement.scrollTop, document.body.scrollHeight);

      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight - document.body.clientHeight,
          behavior: 'smooth'
        })
      }, 10);
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

      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight - document.body.clientHeight,
          behavior: 'smooth'
        })
      }, 10);
    },
    appendOption(answers) {
      // create a subclass of the base Vue constructor
      let optionClass = Vue.extend(Option);
      // create an instance of option component
      let optionComp = new optionClass({
        propsData: {
          data: answers,
          author: 'chatbot'
        }
        }).$on('showAnswer', this.showAnswer).$mount();
      // append the component manually to the target element
      this.$refs['chat-box'].appendChild(optionComp.$el);
    },
    appendInput(placeholder) {
      // create a subclass of the base Vue constructor
      let inputClass = Vue.extend(Input);
      // create an instance of input component
      let inputComp = new inputClass({
        propsData: {
          data: placeholder,
          author: 'chatbot'
        }
        }).$on('showAnswer', this.showAnswer).$mount();
      // append the component manually to the target element
      this.$refs['chat-box'].appendChild(inputComp.$el);
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
        let answers = this.$nuxt.$store.getters['answers/getAnswers'];
        let house = this.$nuxt.$store.getters['answers/getHouse'];
        // append the final message
        this.appendQuestion({title: `Congratulations! ${answers.userName}, you are assigned to the house ${house}`});
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.chat-container {
  background-color: $bgColor;
}

</style>