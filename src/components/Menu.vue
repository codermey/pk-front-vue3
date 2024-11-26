<script lang="ts" setup></script>

<template>
  <div class="flex">
    <RouterLink class="menu-item" to="/product">产品</RouterLink>
    <a class="menu-item" href="https://www.imooc.com" target="_blank">社区</a>
    <RouterLink class="menu-item" to="/study">学习</RouterLink>
    <RouterLink class="menu-item" to="/about">关于</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.menu-item {
  @apply relative py-2 px-8 font-300 text-xl text-white cursor-pointer hover:font-500;
  &:hover {
    &:after {
      @apply content-[''] absolute w-8 h-[1px] bottom-0 left-0 bg-white left-1/2 -translate-x-1/2;
    }
  }
}
</style>
