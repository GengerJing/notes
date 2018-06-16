# @ConfigurationProperties 与 @EnableConfigurationsProperties


## TODO
- [ ] 详细内容： https://blog.csdn.net/u010502101/article/details/78758330
- [ ] 详细内容：https://www.cnblogs.com/V1haoge/p/7183408.html

## 简单理解
### 配置文件加载
spring boot默认加载application.properties（application.yml）
如果自定义的配置文件，则需要手动加载，这里的手动加载一般是借助注解的方式加载。 
@PropertySource("classpath:xxx.properties"),这个注解专门用来加载指定位置的properties文件

### 配置项的使用
1. 只要是加载到spring容器中的配置项都可以直接使用@Value("${key}")的方式来引用
2. 将这些配置项与一个JavaBean绑定起来使用，这样绑定一次，就可以随时使用，绑定需要借助于两个注解：
@Configuration 和 @ConfigurationProperties
或者
@ConfigurationProperties 和 @EnableConfigurationProperties({xxx.class, xxx.class})
注解的作用如下：
@ConfigurationProperties注解可以把properties文件转化为bean
@Configuration或者@EnableConfigurationProperties注解可以把bean注入到IOC容器中
