<!--
 * @Author: fzyt
 * @Date: 2021-10-10 22:24:35
 * @LastEditTime: 2021-10-10 22:29:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-music/src/components/base/loading/loading.vue
-->
<template>
  <div class="loading">
    <div class="loading-content">
      <img width="24" height="24" src="./loading.gif" alt="loading" />
      <p class="desc">{{title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      title: '正在载入...',
    }
  },
  methods: {
    setTitle (title) {
      this.title = title
    },
  },
}
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  .loading-content {
    text-align: center;
    .desc {
      line-height: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
    }
  }
}
</style>
