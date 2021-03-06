/*
 * @Author: fzyt
 * @Date: 2021-10-10 22:31:18
 * @LastEditTime: 2021-10-19 23:04:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-music/src/components/base/loading/directive.js
 */
import Loading from './loading'
import createLoadingLikeDirective from '@/assets/js/create-loading-like-directive'

const loadingDirective = createLoadingLikeDirective(Loading)

export default loadingDirective
