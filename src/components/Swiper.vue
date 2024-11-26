<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import type { SwiperProps } from './types'

const props = withDefaults(defineProps<SwiperProps>(), {
  height: 'h-120',
  items: () => [],
})

const modules = [Navigation, Pagination]

const getClassAndStyle = () => {
  return {
    style: /(rem|px|em|%|vw|vh)$/.test(props.height) ? { height: props.height } : {},
    class: /^h-/.test(props.height) ? props.height : '',
  }
}
</script>

<template>
  <Swiper
    :class="getClassAndStyle().class"
    :modules="modules"
    :navigation="{ prevEl: '.prev', nextEl: '.next' }"
    :pagination="{ el: '.pagination', type: 'fraction' }"
    :space-between="0"
    :style="getClassAndStyle().style"
  >
    <SwiperSlide v-for="(item, index) in items" :key="index">
      <slot :item="item">
        <div
          :style="{ backgroundImage: `url(${item.image})` }"
          class="bg-cover bg-no-repeat bg-center-top w-full size-full"
        >
          <Container class="flex justify-start items-center h-full">
            <div>
              <p class="font-bold text-4xl text-white">{{ item.title }}</p>
              <p class="text-sm text-gray-100 pt-4">{{ item.subTitle }}</p>
            </div>
          </Container>
        </div>
      </slot>
    </SwiperSlide>
    <div
      class="flex justify-center items-center absolute w-40 h-12 bottom-0 right-0 bg-white text-dark-300 opacity-60 z-1"
    >
      <div class="pagination mr-4 font-bold"></div>
      <div class="prev i-mdi-arrow-left-thin cursor-pointer" style="font-size: 2rem"></div>
      <div class="next i-mdi-arrow-right-thin cursor-pointer" style="font-size: 2rem"></div>
    </div>
  </Swiper>
</template>

<style lang="scss" scoped>
.swiper-button-disabled {
  color: rgba($color: #000, $alpha: 0.3);
}
</style>
