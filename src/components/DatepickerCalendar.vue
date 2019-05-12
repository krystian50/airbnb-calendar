<template>
  <div class="datepicker-calendar">
    <datepicker-calendar-header
      @go-back="changeMonthBy(-1)"
      @go-next="changeMonthBy(1)"
    />
  </div>
</template>
<script>
import DatepickerCalendarHeader from "./DatepickerCalendarHeader";

export default {
  components: {
    DatepickerCalendarHeader
  },
  methods: {
    changeMonthBy(numberOfMonths) {
      this.$emit("change-month-by", numberOfMonths);
    }
  }
};
</script>
