# Spring 4框架的新特性：@Conditional注解

## TODO
- [ ] 参考文档：http://412887952-qq-com.iteye.com/blog/2395065


## 作用
@Conditiona此注解使得只有在特定条件满足时才启用一些配置。

## 常用的Condition
@ConditionalOnBean 仅仅在当前上下文中存在某个对象时，才会实例化一个bean
@ConditionalOnClass 当这个class位于类路径上，才会实例化一个bean
@ConditioalOnExpression 当表达式为true的时候，才会实例化一个Bean
