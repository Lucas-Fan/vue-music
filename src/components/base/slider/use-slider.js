/*
 * @Author: fzyt
 * @Date: 2021-10-10 14:45:53
 * @LastEditTime: 2021-10-10 14:52:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-music/src/components/base/slider/use-slider.js
 */
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'

import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

BScroll.use(Slide)

export default function useSlider (wrapperRef) {
  const slider = ref(null)
  const currentPageIndex = ref(0)

  onMounted(() => {
    const sliderVal = slider.value = new BScroll(wrapperRef.value, {
      click: true,
      scrollX: true,
      scrollY: true,
      momentum: false,
      bounce: false,
      probeType: 2,
      slide: true,
    })

    sliderVal.on('slideWillChange', (page) => {
      currentPageIndex.value = page.pageX
    })

    onUnmounted(() => {
      slider.value.destroy()
    })

    onActivated(() => {
      slider.value.enable()
      slider.value.refresh()
    })

    onDeactivated(() => {
      slider.value.disable()
    })
  })

  return {
    slider,
    currentPageIndex,
  }
}
