// components/dialog/dialog.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    bgColor: {
      type: String,
      value: 'rgba(0, 0, 0, .5)'
    },
    zIndex: {
      type: Number,
      value: 99
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
    tapMenuHide() {
      this.setData({
        show: false
      })
    }
  }
})
