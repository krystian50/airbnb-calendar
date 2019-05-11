<template>
  <div>
    <datepicker />
  </div>
</template>
<script>
import { isBetween, isPositive } from "@/helpers/number";
import Datepicker from "./Datepicker";

export default {
  name: "BookingContainer",
  components: {
    Datepicker
  },
  props: {
    price: {
      type: Number,
      required: true
    },
    rating: {
      type: Number,
      validator: isBetween(0, 5),
      default: null
    },
    numberOfRates: {
      type: Number,
      validator: isPositive,
      default: 0
    },
    availableDates: {
      type: Array,
      default: () => []
    }
  }
};
</script>
