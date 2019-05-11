<template functional>
  <div class="booking-container-header">
    <span class="booking-container-header__row">
      {{ props.price }} {{ props.currency }} per night
    </span>
    <span class="booking-container-header__row">
      {{ props.rating }} {{ props.numberOfRates }}
    </span>
  </div>
</template>
<style lang="scss" scoped>
.booking-container-header {
  &__row {
    display: block;
    text-align: left;
  }
}
</style>
