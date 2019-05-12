<template functional>
  <div class="datepicker-header">
    <button class="datepicker-header__arrow" @click="listeners['go-back']()">
      &larr;
    </button>
    <span class="datepicker-header__header">
      may 2017
    </span>
    <button class="datepicker-header__arrow" @click="listeners['go-next']()">
      &rarr;
    </button>
  </div>
</template>
