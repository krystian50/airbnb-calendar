<template functional>
  <td
    class="datepicker-calendar-tile"
    :class="{
      'datepicker-calendar-tile--selected': props.selected,
      'datepicker-calendar-tile--empty': props.empty,
      'datepicker-calendar-tile--disabled': props.disabled
    }"
    @click="!props.empty && !props.disabled && listeners['select']()"
  >
    {{ props.dayInMonth }}
  </td>
</template>
<style lang="scss" scoped>
.datepicker-calendar-tile {
  padding: 8px;

  &:not(&--empty) {
    border: 1px solid $border-color;
  }

  &:not(&--empty):not(&--disabled) {
    cursor: pointer;
  }

  &:hover:not(&--selected):not(&--empty):not(&--disabled) {
    background-color: $calendar-hover-tile-color;
  }

  &--selected {
    background-color: $calendar-active-tile-color;
  }

  &--disabled:not(&--empty) {
    background-color: $calendar-disabled-tile-background-color;
    color: $calendar-disabled-tile-color;
  }
}
</style>
