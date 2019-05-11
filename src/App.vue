<template>
  <div id="app">
    <booking-container v-if="bookingConditions" v-bind="bookingConditions" />
    <span v-else>Loading...</span>
  </div>
</template>

<script>
import BookingContainer from "@/components/BookingContainer";
import RepositoryFactory from "@/repositories/repository.factory";
const bookingConditionsRepository = RepositoryFactory.get("bookingConditions");

export default {
  name: "App",
  components: {
    BookingContainer
  },
  data: () => ({
    bookingConditions: null
  }),
  async created() {
    this.bookingConditions = await bookingConditionsRepository.get();
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

  .booking-container {
    width: 300px;
    margin: 0 auto;
  }
}
</style>
