/*
 * @Author: fzyt
 * @Date: 2021-10-10 22:31:18
 * @LastEditTime: 2021-10-19 23:05:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-music/src/components/base/loading/directive.js
 */
import NoResult from './no-result'
import createLoadingLikeDirective from '@/assets/js/create-loading-like-directive'

const noResultDirective = createLoadingLikeDirective(NoResult)

export default noResultDirective
