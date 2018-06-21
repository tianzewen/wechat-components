#微信小程序 组件库
##统一说明
- 为了保证代码规范，所有组件传值使用驼峰方式命名变量，即: **open-type** 变成 **openType**

##buttonFormid组件
> 按照&lt;form&gt;&lt;button&gt;&lt;/button&gt;&lt;/form&gt;这种形式收集form-id很影响写代码的美感和可维护性，所以我设计了这个组件，目的就是像使用普通的button一样去使用，这种方式也不是尽善尽美，会影响一些样式，我在下面会谈及此事

###使用场景和方式：
- 收集用户的form-id
- **button**怎么使用，**buttonFormid**就怎么使用，注意使用时父级中不要出现**form组件**

###问题以及注意事项
- 该组件下只能有一个子节点，有多个子节点会导致样式会乱
- 可能存在的问题：有些时候，你设置了子节点样式，但是他并没有按照你预计的样子显示，试着把子节点样式直接放在组件上试一试
注：**&lt;buttonFormid&gt;&lt;view class='XXX'&gt;&lt;/view&gt;&lt;/buttonFormid&gt;**没有按照预期显示时，试着换成**&lt;buttonFormid class='XXX'&gt;&lt;view&gt;&lt;/view&gt;&lt;/buttonFormid&gt;**，反之亦然
- 组件没有经过详细的测试，鄙人暂时也懒的测试，所以遇到问题了可以给我反馈或者直接自己改改

##modal组件
> 基于系统showModal的使用方式，同样的变量名，扩展使用场景，增强自定义特性

###使用场景和方式：
- 想使用showModal的时候
- 确认按钮想使用Button组件的open-type属性的时候
- 想自定义按钮列表的时候
- 自定义列表对象包含：text、openType、color字段，例如: [{text: '自定义0', openType: 'contact', color: 'red'}, {text: '自定义1'}]

1. 引入组件到相关页面
1. 设置title、content、showCancel、showCancel、cancelColor、confirmText、confirmColor，另外需要设置show属性为true/false来决定显示和隐藏
1. 如果是自定义列表，属性showCancel、showCancel、cancelColor、confirmText、confirmColor将无效
1. 如果是自定义列表，可以设置属性customDirection来决定自定义列表是row/column，默认是：column
1. 通过设置bind:confirm、bind:cancel、bind:customTap来对应点击确定按钮、取消按钮、自定义按钮的事件
1. 自定义按钮事件会返回所点击的自定义项的内容（你可以在自定义项中写函数，这样就可以动态触发了）

###问题以及注意事项
- 目前没有动画效果
- 自定义列表超过一个屏幕的情况没有考虑
- 极端情况没有考虑
- 没有经过大量测试（中量的也没有）

##dialog组件
> 主要是提供一个弹出层的最底层支持，通过这个基础组件可以制作出专职组件，比如tipDialog，modal用这个当基础层也非常好，不过modal是先做的，这个是后做的，以后可能会重新服装一下modal

###使用场景和方式：
- 因为支持slot，内容直接写在&lt;dialog&gt;&lt;/dialog&gt;中就可以了
- show字段来控制显示和隐藏
- 支持设置背景颜色，字段是bgColor
- 支持设置z-index，字段是zIndex，注意，设置的z-index是最低层的层级，也就是，真正显示内容的view可能是zIndex + 2
- dialog的子元素最好都是绝对定位的，如果你想要子元素是相对定位，可以多套一个view

###问题以及注意事项
- 子元素最好只有一个 并且 最好还是绝对定位，便于你写出称心如意的样式