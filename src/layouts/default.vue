<script lang="ts" setup>
const { y } = useWindowScroll()
</script>

<template>
  <div
    :class="{ 'bg-opacity-30 shadow-lg': y > 0 }"
    class="fixed top-0 w-full bg-black bg-opacity-0 shadow-none z-10 transition-all duration-300"
  >
    <Container>
      <div class="flex items-center">
        <img alt="logo" class="h-full w-14" src="/512x512.png" />
        <Menu />
      </div>
    </Container>
  </div>
  <RouterView />
</template>

<style scoped></style>
