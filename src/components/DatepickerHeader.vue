<template functional>
  <div class="datepicker-header">
    <span class="datepicker-header__arrow" @click="listeners['go-back']()">
      &larr;
    </span>
    <span class="datepicker-header__header">
      may 2017
    </span>
    <span class="datepicker-header__arrow" @click="listeners['go-next']()">
      &rarr;
    </span>
  </div>
</template>
