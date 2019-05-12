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
import { generateMonthMatrix } from "@/helpers/dates.js";
import DatepickerCalendarHeader from "./DatepickerCalendarHeader";

export default {
  components: {
    DatepickerCalendarHeader
  },
  data: () => ({
    dates: [new Date()]
  }),
  created() {
    console.log(generateMonthMatrix(2019, 7));
  },
  methods: {
    changeMonthBy(numberOfMonths) {
      this.$emit("change-month-by", numberOfMonths);
    }
  }
};
</script>
