/*
 * @Author: fzyt
 * @Date: 2021-10-10 11:08:35
 * @LastEditTime: 2021-10-10 14:34:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-music/vue.config.js
 */
const registerRouter = require('./backend/router')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `,
      },
    },
  },
  devServer: {
    before (app) {
      registerRouter(app)
    },
  },
}
