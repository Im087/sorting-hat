import Vue from "vue";

Vue.directive('aos', {
  inserted: (el) => {
    let scroll = function(e) {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      let top = el.offsetTop - scrollTop - document.getElementById('header').offsetHeight;
      let bottom = document.body.clientHeight + scrollTop - el.offsetTop - el.offsetHeight;
    
      if(top < 16 || bottom < 16) {
        console.log(top, bottom);
        el.classList.remove('scrollIn');
        el.classList.add('scrollOut');
      } else {
        el.classList.remove('scrollOut');
        el.classList.add('scrollIn');
      }
    };

    window.addEventListener('scroll', scroll);
  }
})