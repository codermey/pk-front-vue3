export interface SwiperProps {
  items: SwiperItem[]
  height?: string
}

export interface SwiperItem {
  image: string
  title?: string
  subTitle?: string
  desc?: string
  url?: string
}
