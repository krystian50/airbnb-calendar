<template>
  <div class="datepicker-calendar">
    <datepicker-calendar-header
      @go-back="changeMonthBy(-1)"
      @go-next="changeMonthBy(1)"
    />
    <div class="datepicker-calendar__content"></div>
  </div>
</template>
<script>
import DatepickerCalendarHeader from "./DatepickerCalendarHeader";

export default {
  components: {
    DatepickerCalendarHeader
  },
  data: () => ({
    dates: [new Date()]
  }),
  methods: {
    changeMonthBy(numberOfMonths) {
      this.$emit("change-month-by", numberOfMonths);
    }
  }
};
</script>
