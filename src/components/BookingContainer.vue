<template>
  <div class="booking-container">
    <booking-container-header
      :price="price"
      :currency="currency"
      :rating="rating"
      :number-of-rates="numberOfRates"
    />
    <hr class="booking-container__divider" />
    <div class="booking-container__date-range">
      <datepicker class="booking-container__date" />
      <span class="booking-container__date-separator">&rarr;</span>
      <datepicker class="booking-container__date" />
    </div>
  </div>
</template>
<script>
import { isBetween, isPositive } from "@/helpers/number";
import Datepicker from "./Datepicker";
import BookingContainerHeader from "./BookingContainerHeader";

export default {
  name: "BookingContainer",
  components: {
    Datepicker,
    BookingContainerHeader
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
<style lang="scss" scoped>
.booking-container {
  border: 2px solid $border-color;
  padding: 10px;

  &__date-range {
    @include row;
  }

  &__date {
    @include col(5, 12);
  }

  &__divider {
    border: 1px solid $border-color;
  }

  &__date-separator {
    @include col(2, 12);
  }
}
</style>
