# Spring @Configuration用annotation装配spring

## TODO:
- [ ] Spring 容器类的关系：  
JavaConfigApplicationContext  
ClassPathXmlApplicationContext  
AnnotationConfigApplicationContext  
WebApplicationContext  
- [ ] @Configuration用annotation装配Spring的好处

- [ ] 更详细的解说
https://www.cnblogs.com/duanxz/p/7493276.html


## xml方式装配bean

一个典型的Spring配置文件（application-config.xml）：

```xml
<beans>  
        <bean id="orderService" class="com.acme.OrderService"/>  
                <constructor-arg ref="orderRepository"/>  
        </bean>  
        <bean id="orderRepository" class="com.acme.OrderRepository"/>  
                <constructor-arg ref="dataSource"/>  
        </bean>  
</beans>  
```
 
然后你就可以像这样来使用是bean了：

```java
ApplicationContext ctx = new ClassPathXmlApplicationContext("application-config.xml");  
OrderService orderService = (OrderService) ctx.getBean("orderService"); 
```

## annotaion or Java代码 方式装配bean

现在Spring Java Configuration这个项目提供了一种通过java代码来装配bean的方案：

```java
@Configuration  
public class ApplicationConfig {  
  
        public @Bean OrderService orderService() {  
                return new OrderService(orderRepository());  
        }  
  
        public @Bean OrderRepository orderRepository() {  
                return new OrderRepository(dataSource());  
        }  
  
        public @Bean DataSource dataSource() {  
                // instantiate and return an new DataSource …  
        }  
}   
```

然后你就可以像这样来使用是bean了：

```java
JavaConfigApplicationContext ctx = new JavaConfigApplicationContext(ApplicationConfig.class);  
OrderService orderService = ctx.getBean(OrderService.class);  
```

 ## 这么做有什么好处呢?

     1.使用纯java代码，不在需要xml

     2.在配置中也可享受OO带来的好处

     3.类型安全对重构也能提供良好的支持

     4.依旧能享受到所有springIoC容器提供的功能
