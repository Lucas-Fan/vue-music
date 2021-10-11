/*
 * @Author: fzyt
 * @Date: 2021-10-10 12:51:24
 * @LastEditTime: 2021-10-10 12:53:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-music/src/service/base.js
 */
import axios from 'axios'

const ERR_OK = 0
const baseURL = '/'

axios.defaults.baseURL = baseURL

export function get (url, params) {
  return axios.get(url, {
    params,
  }).then((res) => {
    const serverData = res.data
    if (serverData.code === ERR_OK) {
      return serverData.result
    }
  }).catch((e) => {
    console.log(e)
  })
}
