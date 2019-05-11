<template>
  <div id="app">
    <booking-container />
  </div>
</template>

<script>
import BookingContainer from "@/components/BookingContainer";

export default {
  name: "App",
  components: {
    BookingContainer
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
