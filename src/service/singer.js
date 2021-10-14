/*
 * @Author: fzyt
 * @Date: 2021-10-10 22:56:45
 * @LastEditTime: 2021-10-13 00:29:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-music/src/service/singer.js
 */
import { get } from './base'

export function getSingerList () {
  return get('/api/getSingerList')
}

export function getSingerDetail (singer) {
  return get('/api/getSingerDetail', {
    mid: singer.mid,
  })
}
