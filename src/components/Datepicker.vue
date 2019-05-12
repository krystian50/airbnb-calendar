<template>
  <div v-click-outside="closeCalendar" class="datepicker">
    <input
      class="datepicker__input"
      type="text"
      readonly
      @click="showCalendar()"
    />
    <div v-show="isOpen" class="datepicker__calendar">
      <datepicker-header
        @go-back="changeMonthBy(-1)"
        @go-next="changeMonthBy(1)"
      />
    </div>
  </div>
</template>
<script>
import clickOutside from "@/directives/click-outside";

import DatepickerHeader from "./DatepickerHeader";

export default {
  name: "Datepicker",
  directives: {
    clickOutside
  },
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
