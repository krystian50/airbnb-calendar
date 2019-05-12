<template functional>
  <td
    class="datepicker-calendar-tile"
    :class="{
      'datepicker-calendar-tile--selected': props.selected,
      'datepicker-calendar-tile--empty': props.empty
    }"
    @click="!props.empty && listeners['select']()"
  >
    {{ props.dayInMonth }}
  </td>
</template>
<style lang="scss" scoped>
.datepicker-calendar-tile {
  border: 1px solid $border-color;
  padding: 8px;
  cursor: pointer;

  &:hover:not(.datepicker-calendar-tile--selected):not(.datepicker-calendar-tile--empty) {
    background-color: $calendar-hover-tile-color;
  }
}
.datepicker-calendar-tile--selected {
  background-color: $calendar-active-tile-color;
}
</style>
