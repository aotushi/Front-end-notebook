正则表达式

### 0.学习资源

| 序号 | 名称                                                         | 地址                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    | LEARN REGEX THE EASY WAY                                     | [github](https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md) |
| 2    | MDN                                                          | MDN                                                          |
| 3    | https://github.com/cdoco/common-regex                        |                                                              |
| 4    | https://docs.microsoft.com/zh-cn/dotnet/standard/base-types/regular-expression-language-quick-reference?redirectedfrom=MSDN#Anchor_0 |                                                              |
| 5    | JavaScript正则表达式迷你书                                   | https://github.com/qdlaoyao/js-regex-mini-book               |

> [Regular expressions - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
>
> [Deprecated and obsolete features - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp_properties)

### 0.概要

正则表达式是用于匹配字符串中字符组合的模式。在 JavaScript中，正则表达式也是对象。这些模式被用于 [`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 的 [`exec`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 和 [`test`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) 方法, 以及 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 的 [`match`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match)、[`matchAll`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)、[`replace`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)、`replaceAll`, [`search`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search) 和 [`split`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split) 方法。



### 1. 创建方式

#### 1.1 literal

当正则表达式保持不变时，使用此方法可获得更好的性能

```javascript
let re = /ab+c/;
```

#### 1.2 constructor

如果正则表达式将会改变，或者它将会从用户输入等来源中动态地产生，就需要使用构造函数来创建正则表达式。

```javascript
let re = new RegExp('ab+c');
let re2  = new RegExp(/ab+c/)
```

### 2.构造函数中的标志参数(flags)

从 ECMAScript 6 开始，当第一个参数为正则表达式而第二个标志参数存在时，`new RegExp(/ab+c/, 'i')` 不再抛出 [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError) （`"从另一个RegExp构造一个RegExp时无法提供标志"`）的异常，取而代之，将使用这些参数创建一个新的正则表达式。

当使用构造函数创造正则对象时，需要常规的字符转义规则（在前面加反斜杠 `\`）



| 标志 | 描述                                                      |
| :--- | :-------------------------------------------------------- |
| `g`  | 全局搜索。                                                |
| `i`  | 不区分大小写搜索。                                        |
| `m`  | 多行搜索。                                                |
| `s`  | 允许 `.` 匹配换行符。                                     |
| `u`  | 使用unicode码的模式进行匹配。                             |
| `y`  | 执行“粘性(`sticky`)”搜索,匹配从目标字符串的当前位置开始。 |



### 3. 编写正则表达式模式

#### 3.1 使用简单模式

简单模式是由你想直接找到的字符构成。比如，`/abc/` 这个模式就能且仅能匹配 "abc" 字符按照顺序同时出现的情况。

```javascript
let re = /abc/;
let result = re.exec("Hi, do you know your abc's?");
console.log(result);
//['abc', index: 21, input: "Hi, do you know your abc's?", groups: undefined]

let result0 = re.exec("Hi, do you know your abc's? and your abcs");
console.log(result0);
//['abc', index: 21, input: "Hi, do you know your abc's? and your abcs", groups: undefined]

let resul2 = re.exec( "Grab crab" );
console.log(result2);
//null
```

#### 3.2 使用特殊字符

当你需要匹配一个不确定的字符串时，比如寻找一个或多个 "b"，或者寻找空格，可以在模式中使用特殊字符。

| Characters / constructs                                      | Corresponding article                                        | Desc                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- | ------------------------------------------------------------ |
| `\`, `.`, `\cX`, `\d`, `\D`, `\f`, `\n`, `\r`, `\s`, `\S`, `\t`, `\v`, `\w`, `\W`, `\0`, `\xhh`, `\uhhhh`, `\uhhhhh`, `[\b]` | 字符集<br />[Character classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes) | 区分不同类型的字符，例如区分字母和数字。                     |
| `^`, `$`, `x(?=y)`, `x(?!y)`, `(?<=y)x`, `(?<!y)x`, `\b`, `\B` | 断言   [Assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions) | 表示一个匹配在某些条件下发生。断言包含先行断言、后行断言和条件表达式 |
| `(x)`, `(?:x)`, `(?<Name>x)`, `x|y`, `[xyz]`, `[^xyz]`, `\*Number*` | 组合范围   [Groups and ranges](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges) | 表示表达式字符的分组和范围。                                 |
| `*`, `+`, `?`, `x{*n*}`, `x{*n*,}`, `x{*n*,*m*}`             | 量词   [Quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers) | 表示匹配的字符或表达式的数量。                               |
| `\p{*UnicodeProperty*}`, `\P{*UnicodeProperty*}`             | Unicode转义  [Unicode property escapes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes) | 基于 unicode 字符属性区分字符。例如大写和小写字母、数学符号和标点。 |



##### 3.2.1 字符集

1.语法

| 字符 | 含义                                                         |
| ---- | ------------------------------------------------------------ |
| `\`  | 1. 在非特殊字符之前的反斜杠表示下一个字符是特殊字符，不能按照字面理解<br />2. 在特殊字符之前的反斜杠表示下一个字符不是特殊字符，应该按照字面理解.请参阅 "转义（Escaping）" 部分<br />3. 如果你想将字符串传递给 RegExp 构造函数，不要忘记在字符串字面量中反斜杠是转义字符。所以为了在模式中添加一个反斜杠，你需要在字符串字面量中转义它。<br />`/[a-z]\s/i` 和 `new RegExp("[a-z]\\s", "i")` 创建了相同的正则表达式：一个用于搜索后面紧跟着空白字符（`\s` 可看后文）并且在 a-z 范围内的任意字符的表达式。<br />为了通过字符串字面量给 RegExp 构造函数创建包含反斜杠的表达式，你需要在字符串级别和正则表达式级别都对它进行转义。例如 `/[a-z]:\\/i` 和 `new RegExp("[a-z]:\\\\","i")` 会创建相同的表达式，即匹配类似 "C:\" 字符串。 |



| 字符串类                                               | 含义                                                         |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| `.`                                                    | 1.匹配出终止符(line terminators)之外的任意单字符<br />2. 在字符集中, 点号匹配一个字符点而不是原先的特殊意义.<br />3. 注意,'m' multiline标志不会改变点符号的行为,所以可以在多行中匹配一个模式, 可以使用 `[^]`字符集,匹配任何字符包括新行<br />4. ES2018添加`s` 'dotAll'标志, 允许点号也能匹配终止符. |
| `\d`                                                   | 1. 匹配任何阿拉伯数字<br />2. 相当于[0-9]. 例如, `/\d/`or /[0-9]/在套件数字'B2 is the suite number'中匹配'2' |
| `\D`                                                   | 1. 匹配任何非阿拉伯数字字符.<br />2. 相当于\[^0-9].  例如: `/\D/` 或 /\[^0-9]/ 在'B2 is the suite number' 匹配 'B' |
| `\w`                                                   | 1. 匹配基本拉丁字母表中任何字母数字字符,包括下划线.<br />2. 相当于`[A-Za-z0-9_]`  例如: `/\w/`匹配'apple'中的'a', '$5.28'中的'5', '3D'中的'3', "Émanuel"中的'm' |
| `\W`                                                   | 1. 匹配基本拉丁字母表中任何非字母的字符<br />2. 相当于`[^A-Za-z0-9_]` 例如, `/\W/`或者`/[^A-Za-z0-9_]/` 匹配"50%"中的'%', "Émanuel"中的"É" |
| `\s`                                                   | 1. 匹配一个空格字符,包括空格, 缩进, 换页(form feed), 换行(line feed), 和其他Unicode 空格.<br />2. 相当于`[ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]`<br />3. 例如, `/\s\w*/`匹配"foo bar"中的'bar' |
| `\S`                                                   | 1. 匹配一个字符而非空格<br />2. 相当于 `[^ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]`<br />3. 例如, `/\S\w*/`匹配"foo bar"中的'foo' |
| `\t`                                                   | 匹配一个水平制表符(a horizontal tab)                         |
| `\r`                                                   | 匹配一个回车符(a carriage return)                            |
| `\n`                                                   | 匹配一个换行符(a linefeed)                                   |
| `\v`                                                   | 匹配一个垂直制表符(a vertical tab)                           |
| `\f`                                                   | 匹配一个换页符(a form-feed)                                  |
| `[\b]`                                                 | 匹配一个退格(a backspace).                                   |
| `\0`                                                   | 匹配一个NULL字符. 不要在之后添加其他数字, 因为`\0`是一个八进制转义序列 |
| `\cX`    ????                                          | 1. 当X是处于A到Z之间的字符的时候，匹配字符串中的一个控制符<br />2. 例如, `/\cM\cJ/`匹配'\r\n' |
| `\xhh`  ????                                           | 1. 用代码 `hh`(两个16进制数字)匹配字符                       |
| `\uhhhh`  ????                                         | 匹配值为hhh（四个十六进制数字）的UTF-16编码单元。            |
| \`u{hhhh}` or `\u{hhhhh}  ????                         | (只有当u标志被设置时。)匹配Unicode值为U+hhhh或U+hhhhh（十六进制数字）的字符。 |
| `\p{*UnicodeProperty}`, `\P{*UnicodeProperty*}`   ???? | 根据Unicode字符的属性来匹配一个字符（例如，只匹配emoji字符，或日语片假名字符，或中文/日文汉字/汉字字符，等等）。 |
| `\`                                                    | 表示以下字符应被特别处理，或被 "转义"。<br />1. 对于通常按字面意思处理的字符，表示下一个字符是特殊的，不能按字面意思解释。<br />2. 对于通常被特殊处理的字符，表示下一个字符不特殊，应按字面意思解释<br />3. 从字面上匹配这个字符, 可以用它本身来转义. 换句话说, 用`/\\/`来搜索`\` |



2.实例

寻找一系列数字

```javascript
let randomData = '015 354 8787 687351 3512 8735';
let regexpFourDigits = /\b\d{4}\b/g;

console.table(randomData.match(regexpFourDigits));

//['8787', '3512', '8735']
```

循环以'A'开头的单词

```javascript
var aliceExcerpt = "I’m sure I’m not Ada,’ she said, ‘for her hair goes in such long ringlets, and mine doesn’t go in ringlets at all.";

var regexpWordStartingWithA = /\b[aA]\w+/g;

console.table(aliceExcerpt.match(regexpWordStartingWithA));
// ['Ada', 'and', 'at', 'all']
```



3从Unicode字符中找单词

```javascript
var nonEnglishText = "Приключения Алисы в Стране чудес";
var regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP goes through U+0000 to U+FFFF but space is U+0020

console.table(nonEnglishText.match(regexpBMPWord));
[ 'Приключения', 'Алисы', 'в', 'Стране', 'чудес' ]
```



##### 3.2.2 断言

断言包括边界，它表示行和词的开头和结尾，以及以某种方式表示可能存在匹配的其他模式（包括前看、后看和条件表达式）。

边界类型断言

| Characters | Meaning                                                      |
| ---------- | ------------------------------------------------------------ |
| `^`        | 1. 匹配输入的开头。<br />2. 如果多行标志被设置为 "true"，也会在换行符之后立即匹配。例如，/^A/不匹配 "an A "中的 "A"，但匹配 "An A "的第一个 "A"。<br />3. 当 '`^`' 作为第一个字符出现在一个字符集合模式`[^]`时，它将会有不同的含义 |
| `$`        | 匹配输入的结束。如果多行标志被设置为 true，那么也匹配换行符前的位置 |
| `\b`       | 1. 匹配一个词的边界。这是指一个单词字符后面或前面没有另一个单词字符的位置，如一个字母和一个空格之间。<br />2. 请注意，一个匹配的词的边界不包括在匹配中。换句话说，一个匹配的单词边界的长度为零。 |



其他断言

| Characters | Meaning                                      |
| ---------- | -------------------------------------------- |
| `x(?=y)`   | 先行断言: 只有当'x'后跟'y'才匹配'x'          |
| `x(?!y)`   | 非先行断言: 只有当'x'后面不跟着'y'才匹配'x'  |
| `(?<=y)x`  | 后行断言: 只有'x'前面是'y'时,匹配'x'         |
| `(?<!y)x`  | 非后行断言: 只有'x'前面不是'y'时候,才匹配'x' |



案例

使用`^`操作符匹配输入的开始

```javascript
let fruits = ["Apple", "Watermelon", "Orange", "Avocado", "Strawberry"];

// Select fruits started with 'A' by /^A/ Regex.
// Here '^' control symbol used only in one role: Matching beginning of an input.

let fruitsStartsWithA = fruits.filter(fruit => /^A/.test(fruit));
console.log(fruitsStartsWithA); //[ 'Apple', 'Avocado' ]

let fruitsStartsWithNotA = fruits.filter(furit => /^[^A]/.test(fruit));
console.log(fruitsStartsWithNotA); //[ 'Watermelon', 'Orange', 'Strawberry' ]
```

匹配一个单词边界

```javascript
let fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// Select descriptions that contains 'en' or 'ed' words endings:
let enEdSelection = fruitsWithDescription.filter(descr => /(en|ed)\b/.test(descr));

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]
```

前行断言

```javascript
console.log('First test'.match(regex)); // [ 'First' ]
console.log('First peach'.match(regex)); // null
console.log('This is a First test in a year.'.match(regex)); // [ 'First' ]
console.log('This is a First peach in a month.'.match(regex)); // null
```

非前行断言

```javascript
console.log(/\d+(?!\.))/g.exec('3.141'); //['141', index: 2, input: '3.141']
```

断言和范围中'?!'组合使用的不同含义 ????

```javascript
let orangeNotLemon = "Do you want to have an orange? Yes, I do not want to have a lemon!";

// Different meaning of '?!' combination usage in Assertions /x(?!y)/ and  Ranges /[^?!]/
let selectNotLemonRegex = /[^?!]+have(?! a lemon)[^?!]+[?!]/gi
console.log(orangeNotLemon.match(selectNotLemonRegex)); // [ 'Do you want to have an orange?' ]

let selectNotOrangeRegex = /[^?!]+have(?! an orange)[^?!]+[?!]/gi
console.log(orangeNotLemon.match(selectNotOrangeRegex)); // [ ' Yes, I do not want to have a lemon!' ]
```

后行断言

```javascript
let oranges = ['ripe orange A ', 'green orange B', 'ripe orange C',];

let ripe_oranges = oranges.filter( fruit => fruit.match(/(?<=ripe )orange/));
console.log(ripe_oranges); // [ 'ripe orange A ', 'ripe orange C' ]
```



##### 3.2.3 组合范围(Groups and ranges)

组和范围表示表达式字符的组和范围。

| Characters          | Meaning                                                      |
| ------------------- | ------------------------------------------------------------ |
| `x|y`               | 匹配'x'或'y'                                                 |
| `[xyz]`   `[a-c]`   | 一个字符集。匹配任何一个括号中的字符。你可以通过使用连字符来指定一个字符范围，但是如果连字符作为第一个或最后一个字符出现在方括号中，它将被视为一个字面的连字符，作为一个普通字符包含在字符类中。 |
| `[^a-c]` `[^xyz]`   | 一个被否定或补充的字符类。也就是说，它匹配任何不在方括号内的东西。你可以通过使用连字符来指定一个字符范围，但如果连字符作为第一个或最后一个字符出现在方括号中，它将被视为一个字面的连字符，作为一个正常字符包含在字符类中。 |
| `(x)`               | 捕获组。匹配x并记住匹配的内容。例如，/(foo)/匹配并记住 "foo bar "中的 "foo"。<br/><br/>一个正则表达式可以有多个捕获组。在结果中，与捕获组的匹配通常在一个数组中，其成员的顺序与捕获组中的左括号相同。这通常只是捕获组本身的顺序。当捕获组被嵌套时，这就变得很重要。使用结果元素的索引（[1], ..., [n]）或从预定义的正则表达式对象的属性（$1, ..., $9）访问匹配。<br/><br/>捕获组有一个性能损失。如果你不需要调用匹配的子串，最好选择非捕获式的括号（见下文） |
| `\n`     ????       | 其中 "n "是一个正整数。对正则表达式中与第n个括号相匹配的最后一个子串的反向引用（算上左括号）。<br />(Where "n" is a positive integer. A back reference to the last substring matching the n parenthetical in the regular expression (counting left parentheses). |
| `\k<Name>`   ????   | `A back reference to the last substring matching the **Named capture group** specified by `<Name>`.`<br /> 1. self version: 最后一个子字符串匹配的被`<Name>`规定的命名捕获组的反向引用<br />2. deepL version: 对与<Name>所指定的Named capture group相匹配的最后一个子串的反向引用。<br />3. 例如, |
| `(?<Name>x)`   ???? | 匹配 "x"，并将其存储在返回的匹配物的组属性中，其名称由<Name>指定。<br />( Matches "x" and stores it on the groups property of the returned matches under the name specified by` <Name>`) |
| `(?:x)`             | 匹配'x'但是不记住这个匹配.  匹配的子串不能从结果数组的元素（[1], ..., [n]）或预定义的RegExp对象的属性（$1, ..., $9）中再次调用。 |

实例

计算元音字母

```javascript
var aliceExcerpt = "There was a long silence after this, and Alice could only hear whispers now and then.";
var regexpVowels = /[aeiouy]/g;

console.log("Number of vowels:", aliceExcerpt.match(regexpVowels).length);
// Number of vowels: 25
```

使用组

```javascript
???
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
```

使用命名组

```javascript
???
```

##### 3.2.4 量词

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers





## 正则表达式字符匹配攻略

> <span style="color:red;">正则表达式是匹配模式，要么匹配字符，要么匹配位置</span>



### 1.两种模糊匹配

模糊匹配, 有两个方向上的'模糊': **横向模糊,纵向模糊**.



#### 1.1 横向模糊匹配

横向模糊指的是，一个正则可匹配的字符串的长度不是固定的，可以是多种情况的。

<span style="color:blue;">**实现的方法是:使用量词**</span>. 譬如 {m, n},表示连续出现最少m次, 最多n次.

比如正则 `/ab{2, 5}c/` 表示匹配这样一个字符串: 第一个字符是'a', 接下来是2到5个字符'b',最后的字符是'c'.

![](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/image.7l0aruii0zs0.webp)





#### 1.2 纵向模糊匹配

纵向模糊指的是，一个正则匹配的字符串，具体到某一位字符时，它可以不是某个确定的字符，可以有多种可能。

<span style="color:blue;">**其实现方式是使用字符组**</span>. 譬如[abc], 表示该字符可以是字符'a','b','c'中的任何一个.

比如 `/a[123]b/`可以匹配如下三种字符串: 'a1b', 'a2b', 'a3b'.

其可视化形式如下:

![](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/image.644lgood1500.webp)





### 2.字符组

注意,虽然叫字符组(字符类),但只是其中一个字符.

例如`[abc]`,表示匹配一个字符,它可以是'a', 'b', 'c'之一.

#### 2.1 范围表示法

如果字符组里的字符特别多怎么办? 可以使用范围表示法.

比如`[123456abcdefGHIJKLM]`, 可以写成 `[1-6a-fG-M]`. 用<span style="color:blue;">连字符 `-`</span>来省略和简写.

因为连字符有特殊用途,那么要匹配`'a', '-', 'z'`这三者中的任意一个字符,如何做?

可以写成如下形式: `[-az]`, `[az-]`, `[a\-z]`. 要么放在开头,要么结尾,要么转义.



#### 2.2 排除字符组

纵向模糊匹配,有一种情形是,某位字符可以是任何东西,但就不能是'a', 'b','c'.

此时就是排除字符组(反义字符组)的概念. 字符组的第一位放<span style="color:blue;">`^`(脱字符)</span>,表示求反的概念.

当然,也有相应的范围表示法.

`[^abc]`, 表示是一个除'a', 'b','c'之外的任何字符.

`[^a-h]`, 表示是一个除a-h字母之外的字符



#### 2.3 常见的简写形式

有了字符组的概念后,看一下系统自带的简写形式:

| 字符组 | 具体含义                                                     |
| ------ | ------------------------------------------------------------ |
| `\d`   | 表示`[0-9]`. 表示是一位数字.<br/>记忆方式: 其英文是digit(数字) |
| `\D`   | 表示`[^0-9]`. 表示除数字外的任意字符.                        |
| `\w`   | 表示`[0-9a-zA-Z_]`. 表示数字,大小写字母和下划线.<br/>记忆方式: w是word 的简写,也成单词字符. |
| `\W`   | 表示`[^0-9a-zA-Z_]` 非单词字符                               |
| `\s`   | 表示`[\t\v\n\r\f]`. 表示空白符, 包括空格, 水平制表符,垂直制表符,换行符,回车符.<br/>记忆方式: s是space的首字母,空白符的单词是white space |
| `\S`   | 表示`[^\t\v\n\r\f]`. 非空白符                                |
| `.`    | 表示`[^\n\r\u2028\u2029]`. 通配符,表示几乎任意字符. 换行符, 回车符, 行分隔符和段分隔符除外.<br/>记忆方式: 想想省略号`...`中的每个点,可以理解成占位符,表示任何类似的东西. |

**如果要匹配任何字符?**

可以使用`[\d\D]` , `[\w\W]`, `[\s\S]` 和 `[^]`中的任何一个.

以上各字符组对应的可视化形式是:

![](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/image.5r0usaitgzk0.webp)



### 3.量词

<u>量词也称重复</u>。掌握 {m,n} 的准确含义后，只需要记住一些简写形式。

#### 3.1 简写形式

| 量词   | 具体含义                                                     |
| ------ | ------------------------------------------------------------ |
| `{m,}` | 表示至少出现m次                                              |
| `{m}`  | 等价于`{m, m}`, 表示出现m次                                  |
| `?`    | 等价于`{0,1}`, 表示出现或不出现.<br/>记忆方式: 问号的意思表示, 有吗? |
| `+`    | 等价于`{1, }`,表示至少出现1次.<br/>记忆方式: 加号是追加的意思,得先有一个,然后才考虑追加. |
| `*`    | 等价于`{0, }`,表示出现任意次,有可能不出现. <br/>记忆方式: 看看天上的星星,可能一颗没有,可有零散几颗,可能数也数不过来.(太牛逼的类比了) |

#### 3.2 贪婪匹配和惰性匹配

贪婪匹配,它会尽可能多的匹配. 惰性匹配,就是尽可能少的匹配.

通过在量词后面加个问号实现惰性匹配.

例子:

```javascript
//贪婪匹配
let regex = /\d{2,5}/g;
let str = '123 1234 12345 123456';
console.log(str.match(regex));
//["123", "1234", "12345", "12345"]
```

其中正则`/\d{2,5}/`, 表示数字连续出现2到5次.会匹配2位,3位,4位,5位连续数字.因为是贪婪的,会尽可能多的匹配. 给6个,要5个.给3个,要3个.

```javascript
//惰性匹配
let regex = /\d{2,5}?/g;
let str = '123 1234 12345 123456';
console.log(str.match(regex));
//["12", "12", "34", "12", "34", "12", "34", "56"]
```



惰性匹配情形如下:

| 惰性量词 | 贪婪量词 |
| -------- | -------- |
| {m, n}?  | {m,n}    |
| {m,}?    | {m,}     |
| ??       | ?        |
| +?       | +        |
| *?       | *        |

记忆方式:  对惰性匹配的记忆方式是：量词后面加个问号，问一问你知足了吗，你很贪婪吗？

以上惰性量词对应的可视化形式:

![JavaScript正则表达式迷你书（1](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/JavaScript正则表达式迷你书（1.62fudpt38h40.webp)



### 4.多选分支

<u>一个模式可以实现横向和纵向模糊匹配. 而多选分支可以支持多个子模式任选其一.</u>

具体形式如下: `(p1|p2|p3)`, 其中p1, p2, p3是子模式, 用<span style="color: blue;">`|`(管道符)</span>分隔, 表示其中任何之一.

例如要匹配字符串"good"和"nice", 可以使用`/good|nice/`

可视化形式如下:

![多选分支](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/多选分支.1uc2akq0j9sw.webp)

```javascript
let regex = /good|nice/g;
let str = 'good idea, nice try';
console.log(str.match(regex));
//['good', 'nice']
```

<u>分支结构也是**惰性**的，即当前面的匹配上了，后面的就不再尝试了</u>

注意: 比如用`/good|goodbye/`, 匹配'goodbye'字符串时, 结果是'good'

```javascript
var regex = /good|goodbye/g;
var string = "goodbye";
console.log( string.match(regex) );
// => ["good"]
```

而把正则改成 /goodbye|good/，结果是：

```javascript
var regex = /goodbye|good/g;
var string = "goodbye";
console.log( string.match(regex) );
// => ["goodbye"]
```



### 5.案例

匹配字符,无非就是字符组,量词和分支解构的组合使用罢了.

#### 5.1 匹配16进制颜色值

要求匹配:

```javascript
#ffbad
#Fc01DF
#FFF
#ffE
```

分析:

表示一个 16 进制字符，可以用字符组 [0-9a-fA-F]。
其中字符可以出现 3 或 6 次，需要是用量词和分支结构。
使用分支结构时，需要注意顺序。

正则如下:

```javascript
let regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
let str = '#ffbbad #Fc01DF #FFF #ffE';
console.log(str.match(regex));

//["#ffbbad", "#Fc01DF", "#FFF", "#ffE"]
```

其可视化形式如下:

![匹配16进制颜色](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/匹配16进制颜色.4qyibes37im0.webp)



#### 5.2 匹配时间

以24小时制为例

要求匹配:

```javascript
23:59
02:07
```

分析:

共 4 位数字，第一位数字可以为 [0-2]。
当第 1 位为 "2" 时，第 2 位可以为 [0-3]，其他情况时，第 2 位为 [0-9]。
第 3 位数字为 [0-5]，第4位为 [0-9]。

正则如下：

```javascript
let regex = /^([2][0-3]|[01][0-9]):[0-5][0-9]$/;
console.log( regex.test("23:59") );
console.log( regex.test("02:07") );
// => true
// => true
```

**Note:** 正则中使用了`^` 和 `$`, 分别表示字符串开头和结尾.

如果也要求匹配"7:9", 也就是说时分前面的'0'可以省略.

此时的正则变成:

```javascript
var regex = /^(0?[0-9]|1[0-9]|[2][0-3]):(0?[0-9]|[1-5][0-9])$/;
console.log( regex.test("23:59") );
console.log( regex.test("02:07") );
console.log( regex.test("7:9") );
// => true
// => true
// => true
```

其可视化形式:

![24小时正则](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/24小时正则.rx4x9ghj25c.webp)



#### 5.3 匹配日期

比如 `yyyy-mm-dd` 格式为例

要求匹配:

```javascript
2017-06-10
```

分析:

年，四位数字即可，可用 [0-9]{4}。
月，共 12 个月，分两种情况 "01"、"02"、…、"09" 和 "10"、"11"、"12"，可用 (0[1-9]|1[0-2])。
日，最大 31 天，可用` (0[1-9]|[12][0-9]|3[01])`

正则规则如下:

```javascript
var regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
console.log( regex.test("2017-06-10") );
// => true
```

可视化形式:

![正则匹配日期](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/正则匹配日期.4udvtxbdqqy0.webp)

#### 5.4 window操作系统文件路径

要求匹配:

```javascript
F:\study\javascript\regex\regular expression.pdf
F:\study\javascript\regex\
F:\study\javascript
F:\
```

分析:

整体模式是:

> 盘符:\文件夹\文件夹\文件夹\

其中匹配 "F:\"，需要使用<span style="color:blue; font-weight: bold;">` [a-zA-Z]:\\`</span>，其中盘符不区分大小写，注意 \ 字符需要转义。

文件名或者文件夹名，不能包含一些特殊字符，此时我们需要排除字符组<span style="color:blue; font-weight: bold;"> `[^\\:*<>|"?\r\n/] `</span>来表示合法字符.

另外它们的名字不能为空名，至少有一个字符，也就是要使用量词 `+`。因此匹配 `文件夹\`，可用<span style="color:blue; font-weight:bold;">`[^\\:*<>|"?\r\n/]+\\`</span>.

另外 文件夹\，可以出现任意次。也就是 (<span style="color: blue; font-weight: bold;">`[^\\:*<>|"?\r\n/]+\\)*`</span>。其中括号表示其内部正则是一个整体.

路径的最后一部分可以是 文件夹，没有 \，因此需要添加<span style="color:blue; font-weight: bold;">` ([^\\:*<>|"?\r\n/]+)?`</span>

最后拼接成了一个看起来比较复杂的正则：

```javascript
let regex = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;
let str= 'F:\study\javascript\regex\regular expression.pdf';

console.log( regex.test("F:\\study\\javascript\\regex\\regular expression.pdf") );
console.log( regex.test("F:\\study\\javascript\\regex\\") );
console.log( regex.test("F:\\study\\javascript") );
console.log( regex.test("F:\\") );
// => true
// => true
// => true
// => true
```

其中，在JavaScript 中字符串要表示字符 \ 时，也需要转义。

可视化形式:

![正则文件路径](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/正则文件路径.5eyx9w1q2p40.webp)



#### 5.5 匹配id

要求从

```javascript 
<div id="container" class="main"></div>
```

提取出 <span style="color: red;">id="container"</span>

开始的正则是:

```javascript
var regex = /id=".*"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex)[0]);
// => id="container" class="main"
```

其可视化形式是:

![匹配id正则](https://cdn.jsdelivr.net/gh/aotushi/image-hosting@master/documentation/匹配id正则.3p1eje2gj5q0.webp)

因为 . 是通配符，本身就匹配双引号的，而量词 * 又是贪婪的，当遇到 container 后面双引号时，是不会停下来，会继续匹配，直到遇到最后一个双引号为止。

解决之道,使用惰性匹配:

```javascript
var regex = /id=".*?"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex)[0]);
// => id="container"
```

当然，这样也会有个问题。<u>效率比较低</u>，因为其匹配原理会涉及到“回溯”这个概念（这里也只是顺便提一下，第四章会详细说明）。可以优化如下:

```javascript
var regex = /id="[^"]*"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex)[0]);
// => id="container"
```













## 速查表

|                | 字面量                                                       |
| -------------- | ------------------------------------------------------------ |
| 模式           | 说明                                                         |
| 字母,数字      | 匹配字面量本身. 比如/f/, 匹配字符'f'                         |
| \0             | 匹配NUL字符                                                  |
| \t             | 匹配水平制表符                                               |
| \v             | 匹配垂直制表符                                               |
| \n             | 匹配换行符                                                   |
| \r             | 匹配回车符                                                   |
| \f             | 匹配换页符                                                   |
| \xnn           | 匹配拉丁字符. 比如 \x0A 等价于 \n                            |
| \uxxxx         | 匹配Unicode字符. 比如 \u2028 匹配行终止字符, \u2029匹配断终止符 |
| \cX            | 匹配 Ctrl + X  比如\cI 匹配 Ctrl + I                         |
| [\b]           | 匹配Backspace键                                              |
|                |                                                              |
|                | 字符串                                                       |
| 模式           | 说明                                                         |
| [abc]          | 匹配'a', 'b', 'c'其中任何一个字符                            |
| [a-d1-4]       | 匹配'a','b','c','d','1','2','3','4'其中任何一个字符          |
| [^abc]         | 匹配除了'a', 'b','c'之外的任何一个字符                       |
| [^a-d1-4]      | 匹配除了 "a"、"b"、"c"、"d"、"1"、"2"、"3"、"4" 之外的任何一个字符 |
| .              | 通配符，匹配除了少数字符（\n）之外的任意字符。               |
| \d             | 匹配数字，等价于 [0-9]。                                     |
| \D             | 匹配非数字，等价于 \[^0-9]                                   |
| \w             | 匹配单词字符，等价于 [a-zA-Z0-9_]                            |
| \W             | 匹配非单词字符，等价于\[^a-zA-Z0-9_]                         |
| \s             | 匹配空白符，等价于 [ \t\v\n\r\f]                             |
| \S             | 匹配非空白符，等价于 \[^ \t\v\n\r\f]                         |
|                |                                                              |
|                | 量词                                                         |
| 模式           | 说明                                                         |
| {n, m}         | 连续出现n到m次. 贪婪模式                                     |
| {n,}           | 至少连续出现n次. 贪婪模式                                    |
| {n}            | 连续出现n次. 贪婪模式                                        |
| ?              | 等价于{0,1}. 贪婪模式                                        |
| +              | 等价于{1,}. 贪婪模式                                         |
| *              | 等价于{0,}. 贪婪模式                                         |
| {n,m}?         | 连续出现n到m次. 惰性模式                                     |
| {n,}?          | 至少连续出现n次. 惰性模式                                    |
| {n}?           | 连续出现n次. 惰性模式                                        |
| ??             | 等价于{0, 1}? 惰性模式                                       |
| +?             | 等价于{1,}? 惰性模式                                         |
| *?             | 等价于{0,}? 惰性模式                                         |
|                |                                                              |
|                | 位置                                                         |
| ^              | 匹配开头的位置,当正则有修饰符 m 时,  表示匹配行开头的位置    |
| $              | 匹配结尾的位置, 当正则有修饰符 m 时, 表示匹配行结尾位置      |
| \b             | 匹配单词边界，即，\w 与 \W、^ 与 \w、\w 与 $ 之间的位置。    |
| \B             | 匹配非单词边界，即，\w 与 \w、\W 与 \W、^ 与 \W，\W 与 $ 之间的位置。 |
| (?=abc)        | 匹配 "abc" 前面的位置，即此位置后面匹配 "abc"。              |
| (?!abc)        | 匹配非 "abc" 前面的位置，即此位置后面不匹配 "abc"。          |
|                |                                                              |
|                | 括号的作用                                                   |
| 模式           | 说明                                                         |
| (ab)           | 捕获型分组。把 "ab" 当成一个整体，比如 (ab)+ 表示 "ab" 至少连续出现一次。 |
| (?:ab)         | 非捕获型分组。与 (ab) 的区别是，它不捕获数据                 |
| (goodnice)     | 捕获型分支结构。匹配 "good" 或 "nice"。                      |
| (?:goodnice)   | 非捕获型分支结构。与 (good\|nice) 的区别是，它不捕获数据。   |
| \num           | 反向引用。比如 \2，表示引用的是第二个括号里的捕获的数据。    |
|                |                                                              |
|                | 修饰符                                                       |
| 符号           | 说明                                                         |
| g              | 全局匹配，找到所有满足匹配的子串。                           |
| i              | 匹配过程中，忽略英文字母大小写。                             |
| m              | 多行匹配，把 ^ 和 $ 变成行开头和行结尾。                     |
|                |                                                              |
|                | String相关实例方法                                           |
| 属性           | 方法作用说明                                                 |
| search         | 返回正则匹配到的第一个子串在目标字符串中的下标位置。         |
| split          | 以正则匹配到的子串，对目标字符串进行切分。返回一个数组。     |
| match          | 对目标字符串执行正则匹配操作，返回的匹配结果数组中包含具体的匹配信息。 |
| replace        | 对目标字符串进行替换操作。正则是其第一个参数。返回替换后的字符串。 |
|                |                                                              |
|                | replace第二个参数中的特殊字符                                |
| 字符           | 说明                                                         |
| $1,$2,....,$99 | 匹配第 1-99 个分组里捕获的文本                               |
| $&             | 匹配到的子串文本                                             |
| $`             | 匹配到的子串的左边文本                                       |
| $'             | 匹配到的子串的右边文本                                       |
| $$             | 美元符号(需要确认具体意思...)                                |
|                |                                                              |
|                | RegExp相关实例方法                                           |
| 属性           | 方法作用说明                                                 |
| test           | 判断目标字符串中是否有满足正则匹配的子串。返回布尔值。       |
| exec           | 比 match 更强大的正则匹配操作。返回结果与 match 一致。       |
|                |                                                              |
|                | RegExp静态属性                                               |
| 属性           | 方法作用说明                                                 |
| $1,...,$9      | 最近一次第 1-9 个分组捕获的数据。                            |
| input          | 最近一次目标字符串，可以简写成 $_ 。                         |
| lastMatch      | 最近一次匹配的文本，可以简写成 $& 。                         |
| lastParen      | 最近一次捕获的文本，可以简写成 $+ 。                         |
| leftContext    | 目标字符串中 lastMatch 之前的文本，可以简写成 $` 。          |
| rightContext   | 目标字符串中 lastMatch 之后的文本，可以简写成 $' 。          |

