<!--
 * @Author: fzyt
 * @Date: 2021-10-10 11:50:11
 * @LastEditTime: 2021-10-12 00:18:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-music/src/views/singer.vue
-->
<template>
  <div class="singer" v-loading="!singers.length">
    <index-list :data="singers"></index-list>
  </div>
</template>

<script>
import { getSingerList } from '@/service/singer'
import IndexList from '@/components/base/index-list/index-list'
export default {
  name: 'singer',
  components: { IndexList },
  data () {
    return {
      singers: [],
    }
  },
  async created () {
    const result = await getSingerList()
    this.singers = result.singers
  },
}
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>
