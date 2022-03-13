<template>
  <div class="chat-container">
    <div>Im chat</div>
    <button @click="appendChat">append</button>
    <div class="chat-box" ref="chat-box">
    </div>
  </div>
  
</template>

<script>
import Question from '@/components/question.vue';
import Answer from '@/components/answer.vue';
import questionData from '@/assets/json/sorting_hat.json';

import Vue from 'vue';

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
  },
  mounted() {
    let questionClass = Vue.extend(Question);
    let questionComp = new questionClass({
      propsData: {
        data: this.questionData[this.questionIndex],
        author: 'chatbot'
      }
      }).$on('showAnswer', this.showAnswer).$mount();
    this.$refs['chat-box'].appendChild(questionComp.$el);
  },
  methods: {
    appendChat() {
      console.log('append');
    },
    showAnswer(option) {
      console.log('showAnswer', option);
      let answerClass = Vue.extend(Answer);
      let answerComp = new answerClass({
        propsData: {
          data: option,
          author: 'user'
        }
        }).$mount();
      this.$refs['chat-box'].appendChild(answerComp.$el);

      this.questionIndex++;

      if(this.questionIndex < this.questionData.length) {
        let questionClass = Vue.extend(Question);
        let questionComp = new questionClass({
          propsData: {
            data: this.questionData[this.questionIndex],
            author: 'chatbot'
          }
          }).$on('showAnswer', this.showAnswer).$mount();
        this.$refs['chat-box'].appendChild(questionComp.$el);
      } else {
        this.$nuxt.$store.dispatch('answers/setScores');
        this.$nuxt.$store.dispatch('answers/setHouse');
        let house = this.$nuxt.$store.getters['answers/getHouse'];
        console.log('house', house);
      }
    }
  }

}
</script>

<style>

</style>