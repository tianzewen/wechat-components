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
    size: String,
    'type': String,
    plain: Boolean,
    disabled: Boolean,
    loading: Boolean,
    openType: String,
    // hoverClass: String,
    hoverStopPropagation: Boolean,
    hoverStartTime: Number,
    hoverStayTime: Number,
    lang: {
      type: String,
      value: 'zh_CN'
    },
    bindgetuserinfo: String,
    sessionFrom: String,
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean,
    appParameter: String
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
    /**
     * 获取formid
     */
    setFormId(e) {
      // 公共获取formid的方法
      // user.setFormId(e.detail.formId)
      this.triggerEvent('click', e, {})
    },
    getUserInfo(res) {
      this.triggerEvent('getuserinfo', res, {})
      // 公共处理授权的方法
      // user.setWechatInfo({ res: res.detail })
      if (res.detail.errMsg === 'getUserInfo:ok') {
        this.triggerEvent('getUserInfoSuccess', res, {})
      }
    },

    /**
     * 客服消息回调
     */
    contact(e) {
      this.triggerEvent('contact', e, {})
    },

    /**
     * 获取用户手机号回调
     */
    getPhonenumber(e) {
      this.triggerEvent('getphonenumber', e, {})
    },

    /**
     * 当使用开放能力时，发生错误的回调
     */
    error(e) {
      this.triggerEvent('error', e, {})
    },

    /**
     * 
     */
    openSetting(e) {
      this.triggerEvent('opensetting', e, {})
    }
  }
})
