<template functional>
  <div class="datepicker-calendar-header">
    <button
      class="datepicker-calendar-header__arrow"
      @click="listeners['go-back']()"
    >
      &larr;
    </button>
    <span class="datepicker-calendar-header__header">
      {{ props.dateTitle }}
    </span>
    <button
      class="datepicker-calendar-header__arrow"
      @click="listeners['go-next']()"
    >
      &rarr;
    </button>
  </div>
</template>
<style lang="scss" scoped>
.datepicker-calendar-header {
  margin: 10px 0 20px;
  display: inline-flex;
  justify-content: space-between;
  width: 100%;

  &__header {
    line-height: 32px;
    font-size: 16px;
  }

  &__arrow {
    padding: 5px 15px;
    border: 2px solid $border-color;
    font-size: 15px;
    outline: none;
  }
}
</style>
