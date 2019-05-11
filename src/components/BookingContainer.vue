<template>
  <p>this is booking container</p>
</template>
<script>
import { isBetween, isPositive } from "@/helpers/number";

export default {
  name: "BookingContainer",
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
