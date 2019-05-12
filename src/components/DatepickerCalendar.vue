<template>
  <div class="datepicker-calendar">
    <datepicker-calendar-header
      :date-title="`m:${calendarDate.month} y:${calendarDate.year}`"
      @go-back="changeMonthBy(-1)"
      @go-next="changeMonthBy(1)"
    />
    <div class="datepicker-calendar__content">
      <table>
        <tr v-for="(datesRow, rowIndex) in dates" :key="rowIndex">
          <datepicker-calendar-tile
            v-for="(date, columnIndex) in datesRow"
            :key="columnIndex"
            :day-in-month="date && date.getDate()"
          />
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import { generateMonthMatrix } from "@/helpers/dates.js";
import DatepickerCalendarHeader from "./DatepickerCalendarHeader";
import DatepickerCalendarTile from "./DatepickerCalendarTile";

export default {
  components: {
    DatepickerCalendarHeader,
    DatepickerCalendarTile
  },
  props: {
    defaultDate: {
      type: Date,
      required: false,
      default: () => new Date()
    }
  },
  data: () => ({
    dates: null,
    calendarDate: {
      year: null,
      month: null
    }
  }),
  created() {
    this.calendarDate.year = this.defaultDate.getFullYear();
    this.calendarDate.month = this.defaultDate.getMonth();
    this.dates = generateMonthMatrix(
      this.calendarDate.year,
      this.calendarDate.month
    );
  },
  methods: {
    changeMonthBy(numberOfMonths) {
      // checks if should decrement a year
      if (this.calendarDate.month + numberOfMonths < 0) {
        this.calendarDate.year -= 1;
        this.calendarDate.month = 11;

        // checks if should increment a year
      } else if (this.calendarDate.month + numberOfMonths > 11) {
        this.calendarDate.year += 1;
        this.calendarDate.month = 0;
      } else {
        this.calendarDate.month += numberOfMonths;
      }

      this.dates = generateMonthMatrix(
        this.calendarDate.year,
        this.calendarDate.month
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.datepicker-calendar {
  width: 150px;
  width: 170px;
  padding: 10px;
  position: absolute;
  background-color: $calendar-background-color;
  border: 1px solid $border-color;
}
</style>
