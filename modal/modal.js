// components/modal/modal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    zIndex: {
      type: Number,
      value: 10
    },
    show: {
      type: Boolean,
      value: false
    },
    title: String,
    content: String,
    confirmOpenType: String,
    showCancel: {
      type: Boolean,
      value: true
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    cancelColor: {
      type: String,
      value: '#929292'
    },
    confirmText: {
      type: String,
      value: '确认'
    },
    confirmColor: {
      type: String,
      value: '#549CFF'
    },
    customList: {
      type: Array
    },
    customDirection: {
      type: String,
      value: 'column'
    }
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
    onConfirm(e) {
      this.hide()
      this.triggerEvent('confirm', e, {})
    },
    onCancel(e) {
      this.hide()
      this.triggerEvent('cancel', e, {})
    },
    onCustomTap(e) {
      this.triggerEvent('customTap', e, {})
    },
    hide() {
      this.setData({
        show: false
      })
    },
    nothing() {}
  },

})
