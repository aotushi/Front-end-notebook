# PC项目

## 1114

### less

```Markdown
less是一种动态样式语言, 属于css预处理器的范畴,它扩展了css语言.
less中文官网: lesscss.cn
```



### less初次使用

1. 定义变量==(@zero: 0)==并运用, 凡是页面中使用0的, 都用@zero代替.
2. 子元素需放在父元素中, 此时子元素可以放心使用class  ???
3. 可以在页面中直接添加less .\<style type='text/less'>. style的标签需要改成less, 同时需要一个less.js的编译文件,放在页面最下方引入.因为需要读取页面中的所有less相关文件.



### less中的注释

```
以//开头的注释, 不会被编译到css中
以/**/包裹的注释会被编译到css文件中
```



### less中的变量

```
- 声明less变量, 需使用 '@'+变量名称, 使用冒号赋值,结尾加分号.
- 作为属性值被使用 直接使用 @+变量名
- 作为属性名称使用 @{变量名称}
- 作为选择器使用 #@{变量名称}  @{#变量名称}
- 混合设置默认值, 就是在定义混合时,直接对参数进行赋值.
 - 设置了默认值的混合, 调用时参数个数没有限制.调用时传值,则使用传入的值;如果没传,则使用默认值.
```

```less
@zero:0;
@w:width;
//@b:box1;
@b:.box1;

@{b}{
    @{w}:400px;
    height:400px;
    position:absolute;
    left:@zero;
    right:@zero;
    top:@zero;
    bottom:@zero;
    margin:auto;
}
```









#### 变量的延迟加载

```
- less在使用变量时, 值的获取,先查看当前大括号是否有这个变量.如果有,无论远近关系,只使用最后一个
- 当前括号内没有, 则向上一层的括号寻找, 然后同上
```



```less
@var: 0;
.box {
  @var: 1;
  .inner {
    width: @var; //width取值7
  }
  height: @var; //height取值7
  @var:7;
}
@var:8;
```



### 嵌套关系

```
- less中默认直接嵌套的话, 使用的选择器为后代选择器(缩进) //后代选择器使用在类名身可以, 但不建议使用在标签选择器上.
- 若要设置直接子元素选择器, 就是在选择器的前边添加大于号>  (一级后代)
- 在任意大括号内, 使用&符, 则代表自身.设置如伪类, 伪元素, 结构类等带冒号选择器的时候, 几乎都要使用这种格式.
```



```css
li:hover{} 等价于 &:hover{}

```



### Mixin混合

```
- 混合定义: .混合名称(){样式}
- 混合调用: .混合名称(); //相当于在调用的位置, 将混合内部的css样式在调用位置写了一遍
- 混合设置参数: 如果参数没有设置默认值, 那么调用混合时,参数的个数,必须对等.
 - 但是less混合的参数,传递的时候不在意顺序,传参时的语法,就相当于是给这个变量赋值.
```



```less
===================less==============================
.allCenter(@w, @h, @bg){
    width: @w;
    height: @h;
    background: @bg;
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    margin:auto;
}

.box1{
    .allCenter(@w:400px, @h:400px, @bg:pink);
    .box2{
        .allCenter(@w:300px, @h:300px, @bg:yellow);
        .box3{
            .allCenter(@w:200px, @h:200px, @bg:blue);
            .box4{
                .allCenter(@w:100px, @h:100px, @bg:red);
            }
        }
    }
}

=========================生成的css文件========================
.box1 {
  width: 400px;
  height: 400px;
  background: pink;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
.box1 .box2 {
  width: 300px;
  height: 300px;
  background: yellow;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
.box1 .box2 .box3 {
  width: 200px;
  height: 200px;
  background: yellowgreen;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
.box1 .box2 .box3 .box4 {
  width: 100px;
  height: 100px;
  background: blue;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
```



































































































































































































































