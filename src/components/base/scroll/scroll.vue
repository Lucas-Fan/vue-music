<!--
 * @Author: fzyt
 * @Date: 2021-10-10 21:54:22
 * @LastEditTime: 2021-10-11 23:47:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-music/src/components/base/scroll/scroll.vue
-->
<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
import useScroll from './use-scroll'
import { ref } from 'vue'
export default {
  name: 'scroll',
  props: {
    click: {
      type: Boolean,
      default: true,
    },
    probeType: {
      type: Number,
      default: 0,
    },
  },
  emits: ['scroll'],
  setup (props, { emit }) {
    const rootRef = ref(null)
    useScroll(rootRef, props, emit)

    return {
      rootRef,
    }
  },
}
</script>
