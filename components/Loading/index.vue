<template>
  <div
    class="fixed z-0 bg-opacity-50 bg-slate-700 left-0 right-0 top-0 bottom-0 h-full w-full flex items-center justify-center"
  >
    <img class="pokeball-img" src="~/public/images/pokeball.png" width="100" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.pokeball-img {
  animation: shake 1s infinite ease-in-out forwards;
}

@keyframes shake {
  
    0 { transform: translate(0, 0) rotate(0); }
    20% { transform: translate(-10px, 0) rotate(-20deg); }
    30% { transform: translate(10px, 0) rotate(20deg); }
    50% { transform: translate(-10px, 0) rotate(-10deg); }
    60% { transform: translate(10px, 0) rotate(10deg); }
    100% { transform: translate(0, 0) rotate(0); }
}
</style>
