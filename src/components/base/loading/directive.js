/*
 * @Author: fzyt
 * @Date: 2021-10-10 22:31:18
 * @LastEditTime: 2021-10-10 22:49:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-music/src/components/base/loading/directive.js
 */
import { createApp } from 'vue'
import { addClass, removeClass } from '@/assets/js/dom'
import Loading from './loading'

const relativeCls = 'g-relative'

const loadingDirective = {
  mounted (el, binding) {
    const app = createApp(Loading)
    const instance = app.mount(document.createElement('div'))
    el.instance = instance
    const title = binding.arg
    if (typeof title !== 'undefined') {
      instance.setTitle(title)
    }

    if (binding.value) {
      append(el)
    }
  },
  updated (el, binding) {
    const title = binding.arg
    if (typeof title !== 'undefined') {
      el.instance.setTitle(title)
    }
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  },
}

function append (el) {
  const style = getComputedStyle(el)
  if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
    addClass(el, relativeCls)
  }
  el.appendChild(el.instance.$el)
}

function remove (el) {
  removeClass(el, relativeCls)
  el.removeChild(el.instance.$el)
}

export default loadingDirective
