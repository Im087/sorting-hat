<template>
  <div class="home-container d-flex flex-column h-100">
    <header class="py-5">
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

    h1 {
      color: #FFFFFF;
    }
  }
}

</style>