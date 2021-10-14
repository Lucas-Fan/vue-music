<!--
 * @Author: fzyt
 * @Date: 2021-10-10 11:50:11
 * @LastEditTime: 2021-10-13 00:21:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-music/src/views/singer.vue
-->
<template>
  <div class="singer" v-loading="!singers.length">
    <index-list :data="singers" @select="selectSinger"></index-list>
    <router-view :singer="selectedSinger"></router-view>
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
      selectedSinger: null,
    }
  },
  async created () {
    const result = await getSingerList()
    this.singers = result.singers
  },
  methods: {
    selectSinger (singer) {
      this.selectedSinger = singer
      this.$router.push({
        path: `/singer/${singer.mid}`,
      })
    },
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
