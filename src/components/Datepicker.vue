<template>
  <div v-click-outside="closeCalendar" class="datepicker">
    <input
      class="datepicker__input"
      type="text"
      readonly
      @click="showCalendar()"
    />
    <datepicker-calendar v-show="isOpen" @change-month-by="changeMonthBy" />
  </div>
</template>
<script>
import clickOutside from "@/directives/click-outside";
import DatepickerCalendar from "./DatepickerCalendar";

export default {
  name: "Datepicker",
  directives: {
    clickOutside
  },
  components: {
    DatepickerCalendar
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
    showCalendar() {
      this.isOpen = true;
    },
    closeCalendar() {
      this.isOpen = false;
    },
    changeMonthBy(months) {
      console.log(months);
    }
  }
};
</script>
