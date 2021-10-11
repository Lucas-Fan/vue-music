/*
 * @Author: fzyt
 * @Date: 2021-10-10 12:54:26
 * @LastEditTime: 2021-10-10 14:24:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-music/src/service/recomment.js
 */
import { get } from './base'

export function getRecommend () {
  return get('/api/getRecommend')
}
