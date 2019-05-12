<template functional>
  <div class="datepicker-calendar-header">
    <button
      class="datepicker-calendar-header__arrow"
      @click="listeners['go-back']()"
    >
      &larr;
    </button>
    <span class="datepicker-calendar-header__header">
      may 2017
    </span>
    <button
      class="datepicker-calendar-header__arrow"
      @click="listeners['go-next']()"
    >
      &rarr;
    </button>
  </div>
</template>
