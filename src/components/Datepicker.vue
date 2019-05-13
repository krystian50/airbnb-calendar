<template>
  <div v-click-outside="closeCalendar" class="datepicker">
    <input
      v-model="selectedDate"
      class="datepicker__input"
      type="text"
      readonly
      @click="showCalendar()"
    />
    <datepicker-calendar
      v-show="isOpen"
      v-model="selectedDate"
      :default-date="defaultDate"
      :available-dates="availableDates"
      @input="onDateSelected()"
    />
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
    },
    defaultDate: {
      type: Date,
      required: false,
      default: () => new Date()
    },
    availableDates: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    isOpen: false,
    selectedDate: null
  }),
  created() {
    this.selectedDate = this.value;
  },
  methods: {
    showCalendar() {
      this.isOpen = true;
    },
    closeCalendar() {
      this.isOpen = false;
    },
    onDateSelected() {
      this.$emit("input", this.selectedDate);
      this.isOpen = false;
    }
  }
};
</script>
