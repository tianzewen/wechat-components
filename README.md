#微信小程序 组件库
##统一说明
- 为了保证代码规范，所有组件传值使用驼峰方式命名变量，即: **open-type** 变成 **openType**

##buttonFormid组件
> 按照<form><button></button></form>这种形式收集form-id很影响写代码的美感和可维护性，所以我设计了这个组件，目的就是像使用普通的button一样去使用，这种方式也不是尽善尽美，会影响一些样式，我在下面会谈及此事

###使用场景和方式：
- 收集用户的form-id
- **button**怎么使用，**buttonFormid**就怎么使用，注意使用时父级中不要出现**form组件**

###问题以及注意事项
- 该组件下只能有一个子节点，有多个子节点会导致样式会乱
- 可能存在的问题：有些时候，你设置了子节点样式，但是他并没有按照你预计的样子显示，试着把子节点样式直接放在组件上试一试
注：**<buttonFormid><view class='XXX'></view></buttonFormid>**没有按照预期显示时，试着换成**<buttonFormid class='XXX'><view></view></buttonFormid>**，反之亦然
- 组件没有经过详细的测试，鄙人暂时也懒的测试，所以遇到问题了可以给我反馈或者直接自己改改