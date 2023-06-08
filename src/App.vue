<script setup>
import Header from '../src/components/Header.vue'
import 'animate.css'
</script>

<template>
  <div class="app">
    <Header />
    <div class="slides">
      <RouterView v-slot="{ Component }">
        <!-- enter-active-class="animate_animated animate_fadeInLeft"
          leave-active-class="animate_animated animate_fadeOutLeft" -->
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
  </div>
</template>

<style scoped>
.app {
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.45s ease-out;
  opacity: 1;
}

.fade-enter-to {
  position: absolute;
  top: 0;
}

.fade-enter-from {
  position: absolute;
  top: -100%;
}

.fade-leave-to {
  position: absolute;
  bottom: -100%;
}

.fade-leave-from {
  position: absolute;
  top: 0;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
