<template>
  <div class="booking-container">
    <datepicker class="booking-container__date" />
    <datepicker class="booking-container__date" />
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
    currency: {
      type: String,
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
