<template>
  <div class="mask mt"></div>
  <div class="mask mb"></div>
  <div class="mask mv ml"></div>
  <div class="mask mv mr"></div>
  <div class="mask mv ml2"></div>
  <div class="mask mv mr2"></div>
  
  <Header/>

</template>

<script setup lang="ts">
import Header from '@/components/Header/Header.vue';
</script>

<style scoped>
@import './style.css';
* {
  --main: #4b4b4b;
  --main-width: .7rem;
  --mask-width: 1.5vw;

  box-sizing: border-box;
}
div{
  display: block;
}
.mask{
  position: fixed;
  z-index: 999;
  border: calc(var(--main-width) / 2) solid var(--main);
  background: var(--main);
  pointer-events: none;
}

.mt{
  top: 0;
  height: var(--mask-width);
}

.mb{
  bottom: 0;
  height: var(--mask-width);
}

.mt,.mb{
  height: 0;
  width: 100%;
  left: 0;
}

.mv{
  bottom: 0;
  height: 80vh;
  width: 0;
}
.ml,.ml2{
  left: 0;
  width: var(--mask-width);
}

.mr,.mr2{
  right: 0;
  width: var(--mask-width)
}

.ml2,.mr2{
  bottom: none;
  top: 0;
}
</style>