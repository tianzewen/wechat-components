// var user = require('../../lib/user.js')
// var tool = require('../../lib/tools.js')
// var http = require('../../lib/http.js')

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    openType: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    setFormId(e) {
      // 公共获取formid的方法
      // user.setFormId(e.detail.formId)
      this.triggerEvent('click', {}, {})
    },
    getUserInfo(res) {
      // 公共处理授权的方法
      // user.setWechatInfo({ res: res.detail })
      if (res.detail.errMsg === 'getUserInfo:ok') {
        this.triggerEvent('getUserInfoSuccess', {}, {})
      }
    }
  }
})
