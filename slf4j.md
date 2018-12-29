
参考资料：

## slf4j原理
https://www.cnblogs.com/xrq730/p/8619156.html
slf4j只是一个日志标准，并不是日志系统的具体实现；
slf4j只做两件事情：
1. 提供日志接口
2. 提供获取具体日志对象的方法
日志系统要么实现slf4j，例如slf4j-simple、logback；要么有专门的一层桥接来实现slf4j，例如slf4j-log4j12


## Commons Logging与Slf4j实现机制对比
https://www.cnblogs.com/chenhongliang/p/5312517.html
Commons Logging实现机制
Commons Logging是通过动态查找机制，在程序运行时，使用自己的ClassLoader寻找和载入本地具体的实现。详细策略可以查看commons-logging-*.jar包中的org.apache.commons.logging.impl.LogFactoryImpl.java文件。由于Osgi不同的插件使用独立的ClassLoader，Osgi的这种机制保证了插件互相独立, 其机制限制了Commons Logging在Osgi中的正常使用。

Slf4j实现机制
Slf4j在编译期间，静态绑定本地的Log库，因此可以在Osgi中正常使用。它是通过查找类路径下org.slf4j.impl.StaticLoggerBinder，然后在StaticLoggerBinder中进行绑定。

