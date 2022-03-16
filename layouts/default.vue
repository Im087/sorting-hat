<template>
  <div class="home-container d-flex flex-column h-100">
    <header class="py-5 position-fixed w-100" id="header">
      <h1 class="text-center">Sorting Hat</h1>
    </header>
    <section class="flex-fill">
      <Chat></Chat>
    </section>
  </div>
</template>

<script>
import Chat from "@/components/chat.vue";
export default {
  components: {
    Chat,
  }

}
</script>

<style lang="scss" scoped>
.home-container {
  
  header {
    background-color: $themeColor;
    top: 0;
    z-index: 100;

    h1 {
      color: #FFFFFF;
    }
  }

  section {
    margin-top: 152px;
  }
}

</style>