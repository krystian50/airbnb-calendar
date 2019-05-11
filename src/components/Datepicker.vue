<template>
  <div class="datepicker">
    <input
      class="datepicker__input"
      type="text"
      readonly
      @click="toggleCalendar()"
    />
    <div v-if="isOpen" class="datepicker__calendar">
      <datepicker-header
        @go-back="changeMonthBy(-1)"
        @go-next="changeMonthBy(1)"
      />
    </div>
  </div>
</template>
<script>
import DatepickerHeader from "./DatepickerHeader";

export default {
  name: "Datepicker",
  components: {
    DatepickerHeader
  },
  props: {
    value: {
      type: Date,
      required: false,
      default: null
    }
  },
  data: () => ({
    isOpen: false
  }),
  methods: {
    toggleCalendar() {
      this.isOpen = !this.isOpen;
    },
    changeMonthBy(months) {
      console.log(months);
    }
  }
};
</script>
