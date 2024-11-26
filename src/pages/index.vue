<script lang="ts" setup>
import type { SwiperItem } from '@/components/types'
import bg from '@/assets/images/bg.png'

const swiperList: SwiperItem[] = [
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍',
  },
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍',
  },
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍',
  },
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍',
  },
]
</script>

<template>
  <div>
    <Swiper :items="swiperList"></Swiper>
    <div class="h-1000 bg-black"></div>
  </div>
</template>

<style lang="scss" scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
