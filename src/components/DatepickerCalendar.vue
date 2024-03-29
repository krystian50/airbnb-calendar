<template>
  <div class="datepicker-calendar">
    <datepicker-calendar-header
      :date-title="`m:${calendarDate.month} y:${calendarDate.year}`"
      @go-back="changeMonthBy(-1)"
      @go-next="changeMonthBy(1)"
    />
    <div class="datepicker-calendar__content">
      <table>
        <tr>
          <th
            v-for="weekday in weekdays"
            :key="weekday"
            class="datepikcer-calendar__weekday"
          >
            {{ weekday }}
          </th>
        </tr>
        <tr v-for="(datesRow, rowIndex) in dates" :key="rowIndex">
          <datepicker-calendar-tile
            v-for="(date, columnIndex) in datesRow"
            :key="columnIndex"
            :selected="isSameDay(selectedDate, date)"
            :empty="!date"
            :disabled="isDisabledDate(date)"
            :day-in-month="date && date.getDate()"
            @select="onDaySelect(date)"
          />
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import {
  generateMonthMatrix,
  getWeekdays,
  differenceInDays
} from "@/helpers/dates.js";
import DatepickerCalendarHeader from "./DatepickerCalendarHeader";
import DatepickerCalendarTile from "./DatepickerCalendarTile";

const weekdays = getWeekdays();

export default {
  name: "DatepickerCalendar",
  components: {
    DatepickerCalendarHeader,
    DatepickerCalendarTile
  },
  props: {
    defaultDate: {
      type: Date,
      required: true
    },
    value: {
      type: Date,
      required: false,
      default: null
    },
    availableDates: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    dates: null,
    calendarDate: {
      year: null,
      month: null
    },
    selectedDate: null,
    weekdays
  }),
  created() {
    if (this.value) {
      this.calendarDate.year = this.value.getFullYear();
      this.calendarDate.month = this.value.getMonth();
    } else {
      this.calendarDate.year = this.defaultDate.getFullYear();
      this.calendarDate.month = this.defaultDate.getMonth();
    }

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
    },
    onDaySelect(date) {
      this.selectedDate = date;
      this.$emit("input", this.selectedDate);
    },
    isSameDay(firstDate, secondDate) {
      if (!firstDate || !secondDate) {
        return false;
      }

      return differenceInDays(firstDate, secondDate) === 0;
    },
    // date is disabled when its not in availableDates
    isDisabledDate(date) {
      const comparator = availableDate => this.isSameDay(availableDate, date);

      return this.availableDates.findIndex(comparator) === -1;
    }
  }
};
</script>
<style lang="scss" scoped>
.datepicker-calendar {
  width: 245px;
  padding: 10px;
  position: absolute;
  background-color: $calendar-background-color;
  border: 1px solid $border-color;
}
</style>
