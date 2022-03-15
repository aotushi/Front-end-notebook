## 正则表达式

### 0.教程

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



速查表

|           | 字面量                                                       |
| --------- | ------------------------------------------------------------ |
| 模式      | 说明                                                         |
| 字母,数字 | 匹配字面量本身. 比如/f/, 匹配字符'f'                         |
| \0        | 匹配NUL字符                                                  |
| \t        | 匹配水平制表符                                               |
| \v        | 匹配垂直制表符                                               |
| \n        | 匹配换行符                                                   |
| \r        | 匹配回车符                                                   |
| \f        | 匹配换页符                                                   |
| \xnn      | 匹配拉丁字符. 比如 \x0A 等价于 \n                            |
| \uxxxx    | 匹配Unicode字符. 比如 \u2028 匹配行终止字符, \u2029匹配断终止符 |
| \cX       | 匹配 Ctrl + X  比如\cI 匹配 Ctrl + I                         |
| [\b]      | 匹配Backspace键                                              |
|           |                                                              |
|           | 字符串                                                       |
| 模式      | 说明                                                         |
| [abc]     | 匹配'a', 'b', 'c'其中任何一个字符                            |
| [a-d1-4]  | 匹配'a','b','c','d','1','2','3','4'其中任何一个字符          |
| [^abc]    | 匹配除了'a', 'b','c'之外的任何一个字符                       |
| [^a-d1-4] | 匹配除了 "a"、"b"、"c"、"d"、"1"、"2"、"3"、"4" 之外的任何一个字符 |
| .         | 通配符，匹配除了少数字符（\n）之外的任意字符。               |
| \d        | 匹配数字，等价于 [0-9]。                                     |
| \D        | 匹配非数字，等价于 \[^0-9]                                   |
| \w        | 匹配单词字符，等价于 [a-zA-Z0-9_]                            |
| \W        | 匹配非单词字符，等价于\[^a-zA-Z0-9_]                         |
| \s        | 匹配空白符，等价于 [ \t\v\n\r\f]                             |
| \S        | 匹配非空白符，等价于 \[^ \t\v\n\r\f]                         |
|           |                                                              |
|           | 量词                                                         |
| 模式      | 说明                                                         |
| {n, m}    | 连续出现n到m次. 贪婪模式                                     |
| {n,}      | 至少连续出现n次. 贪婪模式                                    |
| {n}       | 连续出现n次. 贪婪模式                                        |
| ?         | 等价于{0,1}. 贪婪模式                                        |
| +         | 等价于{1,}. 贪婪模式                                         |
| *         | 等价于{0,}. 贪婪模式                                         |
| {n,m}?    | 联系出现n到m次. 惰性模式                                     |
|           |                                                              |



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





### 2.格式

```javascript 
//创建一个正则表达式的对象
//创建对象: new RegExp('正则', '匹配模式')
//test()是正则表达式的方法,用来检查一个字符串是否符合正则表达式,有true,无false

let re = RegExp('a', 'i'); //a表示找字符串中是否有a i表示ignore 忽略大小写
let str = 'Abcbc';

re.test(str);

# 简写方式
//正则表达式的字面量
let re = new RegExp('a', 'i');
//正则的字面量表达式: /正则/匹配模式  优点方便缺点写完写死
等价于 re = /a/i;
```

### 3.正则语法

```JavaScript
| 在正则表达式中表示或
[]中的内容表示或
 [a-z] 任意的小写字母
 [A-Z] 任意的大写字母
 [A-Za-z] 任意字母
 [0-9] 任意数字
 
[^] 在中括号里表示除了内容之外 
 
 
量词
? 0-1次,相当于{0,1}
+ 至少一次,相当于{1,}
* 任意次, 相当于{0,} 
{m} 正好出现m次
{m,n} m-n次
{m,} m次以上
          
圆括号()



^ 表示字符的开头
& 表示字符的结束
 如果一个正则表达式以^开头,以&结束,则要求字符串和正则表达式完全匹配
. (点号)表示任意字符,除了换行(1119添加)
 在正则表达式中,使用反斜杠\作为转义字符
 
\. --> .
\w 任意的单词字符,相当于[A-Za-z0-9_] 大小写字母数字和下划线
\W 非单词字符, 相当于[^A-Za-z0-9_]
\d 任意数字 [0-9]
\D 非数字[^0-9]
\b 单词边界  有单词边界表示这是一个独立的单词
\B 非单词边界
\s 空格
\S 非空格

let str = 'hello child';
let check = /\bchild\b/;
alert(check.test(str));
```



#### 3.1 圆括号

正则表达式中的圆括号的作用是对字符进行分组，并保存匹配的文本

**用法**1 对字符或元字符进行分组，这样在圆括号内就可以对字符组合使用限定符

```js
/(A/d){2}/.test()   //false
/(A/d){2}/.test('A2A2') //true
```

**用法2** 表示可选择性

```js
1.从两个直接量中选择一个
/gr(a|e)y/ 匹配gray和grey,还可以使用gr[ae]y,效率更高

2.从多个直接量中选择
/^(Doctor|Dr\.?)$/ 匹配Doctor,Dr,Dr.三种情况

3.捕获圆括号

4.非捕获圆括号


```





#### 3.2 u修饰符

正则表达式可以完成简单的字符串操作，但默认将字符串中的每一个字符按照16位编码单元处理。为解决这个问题，ECMAScript 6给正则表达式定义了一个支持Unicode的u修饰符.

<u>当一个正则表达式添加了u修饰符时，它就从编码单元操作模式切换为字符模式</u>，如此一来正则表达式就不会视代理对为两个字符，从而完全按照预期正常运行。例如，以下这段代码：

```javascript
let text = '𠮷';

console.log(text.length); //2
console.log(/^.$/.test(text)); //false
console.log(/^.$/u.test(text)); //true
```

正则表达式/^.$/匹配所有单字符字符串。没有使用u修饰符时，会匹配编码单元，因此使用两个编码单元表示的日文字符不会匹配这个表达式；使用了u修饰符后，正则表达式会匹配字符，从而就可以匹配日文字符了。



#### 3.3 计算码位数量

虽然ECMAScript 6不支持字符串码位数量的检测（length属性仍然返回字符串编码单元的数量），但有了u修饰符后，你就可以通过正则表达式来解决这个问题.

```javascript
function codePointLength(text) {
	let result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}

console.log(codePointLength('abc')); //3
console.log(codePointLength('𠮷bc')); //3
```

在这个示例中，创建一个支持Unicode且应用于全局的正则表达式，通过调用match()方法来检查空格和非空格字符（使用[\s\S]来确保这个模式能够匹配新行）。当匹配到至少一个字符时，返回的数组中包含所有匹配到的字符串，其长度为字符串中码位的数量。在Unicode中，字符串"abc"和"[插图]bc"都有3个字符，所以数组长度是3。

这个方法尽管有效，但是当统计长字符串中的码位数量时，运行效率很低。因此，你也可以使用字符串迭代器（将在第8章讨论）解决效率低的问题，总体而言，只要有可能就尝试着减小码位计算的开销。



#### 3.4 检测u修饰符支持

u修饰符是语法层面的变更，尝试在不兼容ECMAScript 6的JavaScript引擎中使用它会导致语法错误。如果要检测当前引擎是否支持u修饰符，最安全的方式是通过以下这个函数：

```javascript
function hasRegExpU() {
  try {
    var pattern = new RegExp('.', 'u');
    return true;
  } catch (ex) {
    return false;
  }
}
```

这个函数使用了RegExp构造函数并传入字符串"u"作为参数，老式的浏览器引擎支持这个语法，但是如果当前引擎不支持u修饰符会抛出错误。

[插图]如果你的代码仍然需要运行在老式的JavaScript引擎中，那么在使用u修饰符时切记使用RegExp构造函数，这样可以避免发生语法错误，并且你可以有选择地检测和使用u修饰符，而不会造成系统异常终止。



#### 3.5 y修饰符

y修饰符曾在Firefox中被实现，现在它经ECMAScript 6标准化后正式成为正则表达式的一个专有扩展。它会影响正则表达式搜索过程中的**sticky属性**，当在字符串中开始字符匹配时，<u>它会通知搜索从正则表达式的**lastIndex属性**开始进行</u>，如果在指定位置没能成功匹配，则停止继续匹配。

```javascript
let text = 'hello1 hello2 hello3',
    pattern = /hello\d\s?/,
    result = pattern.exec(text),
    globalPattern = /hello\d\s?/g,
    globalResult = globalPattern.exec(text),
    stickyPattern = /hello\d\s?/y,
    stickyResult = stickyPattern.exec(text);

console.log(result[0]); // 'hello1 '
console.log(globalResult[0]); // 'hello1 '
console.log(stickyResult[0]); // 'hello1 '


pattern.lastIndex = 1;
globalPattern.lastIndex = 1;
stickyPattern.lastIndex = 1;

result = pattern.exec(text);
globalResult = globalPatten.exec(text);
stickyPatten = stickyPattern.exec(text);

console.log(result[0]); //hello1
console.log(globalResult[0]); //hello2
console.log(stickyResult[0]); //抛出错误
```

在这个示例中有3个正则表达式，pattern没有修饰符，globalPattern使用了g修饰符，stickyPattern使用了y修饰符。第一组console.log()方法调用返回的结果都应该是"hello1 "，注意字符串末尾有一个空格。

随后，所有3种模式的lastIndex属性都被更改为1，此时正则表达式应该从字符串的第二个字符开始匹配。没有修饰符的表达式自动忽略这个变化，仍然匹配"hello1 "；使用了g修饰符的表达式，从第二个字符"e"开始搜索，继续向后成功匹配"hello2 "；使用了y修饰符的粘滞正则表达式，由于从第二个字符开始匹配不到相应字符串，就此终止，所以stickyResult的值为null。

<u>当执行操作时，y修饰符会把上次匹配后面一个字符的索引保存在lastIndex中；如果该操作匹配的结果为空，则lastIndex会被重置为0。g修饰符的行为与此相同</u>，示例如下：

```javascript
let text = 'hello1 hello2 hello3',
    pattern = /hello\d\s?/,
    result = pattern.exec(text),
    globalPattern = /hello\d\s?/g,
    globalResult = globalPattern.exec(text),
    stickyPattern = /hello\d\s?/y,
    stickyResult = stickyPattern.exec(text);

console.log(result[0]); // 'hello1 '
console.log(globalResult[0]); // 'hello1 '
console.log(stickyResult[0]); // 'hello1 '


console.log(pattern.lastIndex); //0
console.log(globalPattern.lastIndex); //7
console.log(stickyPattern.lastIndex); //7;

result = pattern.exec(text);
globalResult = globalPatten.exec(text);
stickyPatten = stickyPattern.exec(text);

console.log(result[0]); //hello1
console.log(globalResult[0]); //hello2
console.log(stickyResult[0]); //hello2

console.log(pattern.lastIndex); //0
console.log(globalPattern.lastIndex); //14
console.log(stickyPattern.lastIndex); //14
```

当第一次调用exec()方法时，stickyPattern和globalPattern两个变量的lastIndex值改变为7，第二次调用之后改变为14。

关于y修饰符还需要记住两点：首先，只有调用exec()和test()这些正则表达式对象的方法时才会涉及lastIndex属性；调用字符串的方法，例如match()，则不会触发粘滞行为。

其次，对于粘滞正则表达式而言，如果使用^字符来匹配字符串开端，只会从字符串的起始位置或多行模式的首行进行匹配。当lastIndex的值为0时，如果正则表达式中含有^，则是否使用粘滞正则表达式并无差别；如果此时lastIndex的值不为0，则该表达式永远不会匹配到正确结果。

若要检测y修饰符是否存在，与检测其他正则表达式修饰符类似，可以通过属性名来检测。此时此刻，应该检查sticky属性，就像这样：

```javascript
let pattern = /hello\d/y;
console.log(pattern.sticky); //true
```

如果JavaScript引擎支持粘滞修饰符，则sticky属性的值为true，否则为false。这个属性是只读的，其值由该修饰符的存在性所决定，不可在代码中任意改变。

y修饰符与u修饰符类似，它也是一个新增的语法变更，所以在老式的JavaScript引擎中使用会触发错误。可以使用以下方法来检测引擎对它的支持程度：

```javascript
function hasRegExpY() {
  try {
    let pattern = new RegExp('.', 'y');
    return true;
  } catch(ex) {
    return false;
  }
}
```

同样，与检测u修饰符时类似，如果不能创建一个使用y修饰符的正则表达式就返回false；如果你需要在老式JavaScript引擎中运行含有y修饰符的代码，切记使用RegExp构造函数，通过定义正则表达式来规避语法错误



#### 3.6 正则表达式的复制

在ECMAScript 5中，可以通过给RegExp构造函数传递正则表达式作为参数来复制这个正则表达式，就像这样：

```javascript
let re1 = /ab/i,
    re2 = new RegExp(re1);
```

此处的变量re2只是变量re1的一份拷贝，但如果给RegExp构造函数提供第二个参数，为正则表达式指定一个修饰符，则代码无法运行，请看这个示例：

```javascript
let re1 = /ab/i,
    re2 = new RegExp(re1, 'g'); //在ES5中抛出错误,在ES6中正常运行
```

如果在ECMAScript 5环境中执行这段代码会抛出一个错误：当第一个参数为正则表达式时不可以使用第二个参数。ECMAScript 6中修改了这个行为，即使第一个参数为正则表达式，也可以通过第二个参数修改其修饰符。举个例子：

```javascript
let re1 = /ab/i,
    re2 = new RegExp(re1, 'g'); //在ES5中抛出错误,在ES6中正常运行

console.log(re1.toString()); // '/ab/i'
console.log(re2.toString()); // '/ab/g'

console.log(re1.test('ab')); //true
console.log(re2.test('ab')); //true

console.log(re1.test('AB')); //true
console.log(re2.test('AB')); //false
```



#### 3.7 flags属性

为了配合新加入的修饰符，ECMAScript 6还新增了一个与之相关的新属性。在ECMAScript 5中，你可能通过source属性获取正则表达式的文本，但如果要获取使用的修饰符，就需要使用如下代码格式化toString()方法输出的文本：

```javascript
function getFlags(re) {
  let text = re.toString();
  return text.substring(text.lastIndexOf('/') + 1, text.length);
}


```

这段代码会将正则表达式转换成字符串并识别最后一个/后面的字符，以此来确定使用了哪些修饰符。

为了使获取修饰符的过程更加简单，ECMAScript 6新增了一个flags属性；它与source属性都是只读的原型属性访问器，对其只定义了getter方法，这极大地简化了调试和编写继承代码的复杂度。

在ECMAScript 6最近的一个版本中，访问flags属性会返回所有应用于当前正则表达式的修饰符字符串。举个例子：

```javascript
let re = /ab/g;

console.log(re.source); //'ab'
console.log(re.flags); //g
```

以上两行代码获取了变量re的所有修饰符，这比toString()技术所使用的代码量更少，并将修饰符打印在了控制台中。结合source属性和flags属性可以免去格式化正则表达式之忧。



### 固定用法

```js
//空行
^\s*(?=\r?$)\n

只能输入英文和数字
/[^A-Za-z0-9]/g
校验不可输入汉字
/[\u4e00-\u9fa5]/g
只能输入数字和点
  /[^0-9.]/g
校验只能输入数字、- 和点
/[^0-9.-]/g
```



### 4.静态属性

### 5.实例属性

### 6.实例方法



| Method                                                       | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`exec()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) | 在字符串中为了匹配结果执行一个搜索,它返回一个数组或者匹配失败返回`null` |
| [`test()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) | 在字符串中测试匹配. 返回`true`或`false`                      |
| [`match()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) | 返回一个包含所有匹配的数组, 里面含有捕获组.匹配失败返回`null` |
| [`matchAll()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) | 返回一个包含所有匹配的迭代对象,含有捕获组.                   |
| [`search()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search) | 在字符串中测试匹配.返回匹配结果的索引,搜索失败返回`-1`       |
| [`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) | 在一个字符串中执行一个匹配的搜索,用一个子字符串来代替匹配到的子字符串. |
| [`replaceAll()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) | 在一个字符串中执行一个匹配的搜索,用一个子字符串来替换匹配到的子字符串 |
| [`split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) | 用一个正则表达式或固定字符串来将字符串拆分成一个子字符串的数组 |

* 在一个字符串中的一个匹配是否被找到，你可以使用 test 或 search 方法；
* 想得到更多的信息（但是比较慢）则可以使用 exec 或 match 方法。
* 如果你使用exec 或 match 方法并且匹配成功了，那么这些方法将返回一个数组并且更新相关的正则表达式对象的属性和预定义的正则表达式对象（详见下）。如果匹配失败，那么 exec 方法返回 null（也就是false）。









#### [RegExp.prototype.exec()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)

**Define**

`exec() `方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)。

在设置了 [`global`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) 或 [`sticky`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) 标志位的情况下（如 `/foo/g` or `/foo/y`），JavaScript [`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 对象是**有状态**的。他们会将上次成功匹配后的位置记录在 [`lastIndex`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) 属性中。使用此特性，`exec()` 可用来对单个字符串中的多次匹配结果进行逐条的遍历（包括捕获到的匹配），而相比之下， [`String.prototype.match()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match) 只会返回匹配到的结果。

如果你只是为了判断是否匹配（true或 false），可以使用 [`RegExp.test()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) 方法，或者 [`String.search()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search) 方法。

```javascript
const regex1 = RegExp('foo*', 'g');
const str1 = 'table football, foosball';
let array1;

while((array1 = regex1.exec(str1)) !== null) {
  console.log(`Found ${array1[0]}. Next Found at ${regexp1.lastIndex}.`)
}

// "Found foo. Next starts at 9."
// "Found foo. Next starts at 19."
```



**Syntax**

```javascript
regexObj.exec(str)
```



**Return values**

* 如果匹配成功，`exec()` 方法返回一个数组，并更新正则表达式对象的 [`lastIndex`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) 属性。
* 完全匹配成功的文本将作为返回数组的第一项，从第二项起，后续每项都对应正则表达式内捕获括号里匹配成功的文本。
* 如果匹配失败，`exec()` 方法返回 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)，并将 [`lastIndex`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) 重置为 0 。

```javascript
let re = /quick\s(brown).+?(jumps)/ig;
let result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');

console.log(result);
//['Quick Brown Fox Jumps', 'Brown', 'Jumps', index: 4, input: 'The Quick Brown Fox Jumps Over The Lazy Dog', groups: undefined]
```

| 对象   | 属性/索引  | 描述                                                         | 例子                                        |
| ------ | ---------- | ------------------------------------------------------------ | ------------------------------------------- |
| result | [0]        | 匹配的全部字符串                                             | Quick Brown Fox Jumps                       |
|        | [1],...[n] | 括号中的分组捕获                                             | [1] = Brown [2] = Jumps                     |
|        | index      | 匹配到字符位于原始字符串的基于0的索引值                      | 4                                           |
|        | input      | 原始字符串                                                   | The Quick Brown Fox Jumps Over The Lazy Dog |
| re     | lastIndex  | 下一次匹配开始的位置                                         | 25                                          |
|        | ignoreCase | 是否使用了'i'标记使正则忽略大小写                            | true                                        |
|        | global     | 是否使用了'g'标记来进行全局的匹配                            | true                                        |
|        | multiline  | 是否使用了 "`m`" 标记使正则工作在多行模式（也就是，^ 和 $ 可以匹配字符串中每一行的开始和结束（行是由 \n 或 \r 分割的），而不只是整个输入字符串的最开始和最末尾处。） | false                                       |
|        | source     | 正则匹配的字符串                                             | quick\s(brown).+?(jumps)                    |



**Example**

1.查找所有的匹配

* 当正则表达式使用 "`g`" 标志时，可以多次执行 `exec` 方法来查找同一个字符串中的成功匹配。
* 当你这样做时，查找将从正则表达式的 [`lastIndex`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) 属性指定的位置开始。（[`test()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) 也会更新 `lastIndex` 属性）。
* 即使再次查找的字符串不是原查找字符串时，[`lastIndex`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) 也不会被重置，它依旧会从记录的 [`lastIndex`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) 开始。
* 不要把正则表达式字面量（或者[`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)构造器）放在 `while` 条件表达式里。由于每次迭代时 [`lastIndex`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) 的属性都被重置，如果匹配，将会造成一个死循环。并且要确保使用了'g'标记来进行全局的匹配，否则同样会造成死循环????。

```javascript
let myRe = /ab*/g,
    str = 'abbcdefabh',
    myArray;

while((myArray = myRe.exec(str)) !== null) {
  let msg = 'Found ' + myArray[0] + '. ';
  msg += 'Next match starts at ' + myRe.lastIndex;
  console.log(msg)
}

while(/ab*/g.exec(str) !== null) {
  console.log()
}
```





#### RegExp.prototype.test()

**Define**

`**test()**` 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 `true` 或 `false`。

**Syntax**

```javascript
regexObj.test(str);
```

**Desc**

* 当你想要知道一个正则表达式是否与指定的字符串匹配时，就可以使用 `test()`（类似于[`String.prototype.search()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/search) 方法），差别在于test返回一个布尔值，而 search 返回索引（如果找到）或者-1（如果没找到）；
* 若想知道更多信息（然而执行比较慢），可使用[`exec()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 方法（类似于 [`String.prototype.match()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match) 方法）。 
* 和 [`exec()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) (或者组合使用),一样，在相同的全局正则表达式实例上多次调用`test`将会越过之前的匹配。



**Example**

* 如果正则表达式设置了全局标志，`test() `的执行会改变正则表达式  [`lastIndex`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)属性。
* 连续的执行`test()`方法，后续的执行将会从 lastIndex 处开始匹配字符串，([`exec()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 同样改变正则本身的 `lastIndex属性值`).

```javascript
var regex = /foo/g;

// regex.lastIndex is at 0
regex.test('foo'); // true

// regex.lastIndex is now at 3
regex.test('foo'); // false
```

#### RegExp.prototype.toString()

**Define**

`**toString()**` 返回一个表示该正则表达式的字符串

**Syntax**

```javascript
regexObj.toString();
```

**Desc**

* [`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 对象覆盖了 [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object) 对象的 `toString()` 方法，并没有继承 [`Object.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)。
* 对于 `RegExp` 对象，`toString` 方法返回一个该正则表达式的字符串形式。

**Example**

```javascript
myExp = new RegExp("a+b+c");
alert(myExp.toString());       // 显示 "/a+b+c/"

foo = new RegExp("bar", "g");
alert(foo.toString());         // 显示 "/bar/g"
```



### 7.应用案例

#### 1.实现千分位分隔符

 ```javascript
 let str = '1000000000000000000',
     reg = /(?=(\B\d{3})+$)/g;
 str.replace(reg, ','); //'1,000,000,000,000,000,000'
 ```

