# Lesson 0 - Web Fundamentals

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/) - **NB!** MDN is an excellent resource for web development. Bookmark it!
- [Learn to code HTML and CSS](http://learn.shayhowe.com/html-css/) - highly recommended to go through this too.

## HTML
- **HTML** is the **H**yper**T**ext **M**arkup **L**anguage used to create webpages. HTML is used to "mark up" the content in a document, and a web browser uses this markup to display the page *elements*.
- [Introduction to HTML on MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML) - some great guides here, please go through them. At the *very least* go through [Getting started with HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- HTML *tags* use the angle brackets generally around the *content*, that defines an HTML *element*.
<img src="https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png" width="450"/>

- The ```A``` tag is the Anchor tag that defines a clickable link, the ```href``` attribute defines where the link points to: either another [URL](https://en.wikipedia.org/wiki/URL) (web address), or a relative or absolute filename on the same server.  
- eg: to a URL 
```html
<a href="http://google.co.za">Link to google.co.za</a>
``` 
- eg: to a relative filename 
```html
<a href="filename.html">Link to filename.html in this current directory on the server</a>
```
- eg: to an absolute filename 
```html
<a href="/path/to/filename.html">Link to filename.html in the /path/to/ directory from the root of the server</a>
```

- Some tags don't surround content, like the *img* tag that defines an image source using an *attribute* on the tag. 

eg: 
```html
<img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png">
``` 

will show this image 

<img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png" width="150">

- **Important tags to know**: html, head, title, link, script, body, a, div, h1 - h6, p, strong, em, img *and many more!*
- Take a look at this page and its source https://cbracco.github.io/html5-test-page/
- Use the developer tools element inspector to view and understand the HTML 
- Go through Learn to Code HTML & CSS - http://learn.shayhowe.com/html-css/ 

## CSS
- CSS is **C**ascading **S**tyle**S**heets which are used to *style* our HTML content. HTML defines *what* the content is, CSS defines *how it should look* 
- CSS files ( or ```<style>``` tags in HTML ) use **selectors** and **style rules** to define how specific elements should look in the document
- eg: 
```css
<style>
  /* make all links (a tags) green, and their background a shade of grey */
  a {
    color: green;
    background-color: #cccccc;
  }
</style>
```
- [CSS selector documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- Selectors can work by tag type, tag ID, class, attribute, and more 
- [CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- Style rules can change a large number of properties, font families, colors, backgrounds, margin, padding etc. 
- Later CSS rules **override** previous rules - if they have the same or higher **specificity** (https://developer.mozilla.org/en/docs/Web/CSS/Specificity) 
- Use the element inspector to see which rules are being applied to the element, see the *computed* tab for the final say in how the element is displayed
- Concept of CSS *reset* to remove all styles across different browsers... http://cssreset.com/what-is-a-css-reset/ 
- Concept of CSS *normalize* to create a decent standard across different browsers... http://nicolasgallagher.com/about-normalize-css/ 

## JavaScript
- JavaScript (JS) is the programming language available within webpages to provide interactive capability
- JS can be used on a webpage between ```<script></script>``` tags or included as a file in with ```<script src="filename.js"></script>```
- eg: between script tags 
```html
<script>
  alert('Hello World!');
</script>
```
- eg: in JS file

HTML file
```html
<script src="filename.js"></script>
```

filename.js
```js
alert('Hello World!');
```

- First steps [What is JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript) on MDN 

- Go through JavaScript tutorial at https://www.javascript.com/try 

### JavaScript syntax and data types

- Single line comments start with ```//``` 
- Multiline comments start with ```/*``` and end with ```*/```
```js
// this is a single line comment

/*
This is a
multi
line
comment
*/
```

- Lines normally end with a semi-colon
- ```alert``` is a browser window function that pops up a message box 
- Strings are surround by single or double quotes 
```js
alert('I am a string');
alert("I am also a string");
```

- We can perform arithmetic on Numbers
```js
6 + 3
// 9

6 - 3
// 3

6 * 3
// 18

6 / 3
// 2
```

- Use the ```var``` keyword to define a variable 
```js
var test;
// test is undefined, but is available as a variable

var temp = "Hello World";
// the variable temp set to the string Hello World

temp = 42;
// the variable temp is now set to the number 42
```

- A Boolean variable can either be true or false 
```js
var myVar = true;
// myVar is now true

myVar = false;
// myVar is now false
```

- code blocks can be surrounded by curly braces ```{``` and ```}```
- ```if``` statements evaluate a boolean expression 
- if the expression evalutes to true, the **then** code block is executed
- if the expression evalutes to false, the **else** code block is executed

```js
if (true) {
  alert('then block will be executed because true is always true');
}
else {
  alert('else block will not be executed');
}

if (5 < 3) {
  alert('then block will not execute because 5 is not less than 3');
}
else {
  alert('this else block will be executed because 5 is not less than 3');
}
```

- Arrays are used to store many *values*, of any type. Arrays use square brackets. Each value in an array has an *index*. The first index is 0 (not 1) 
- [Reference to Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods)

```js
// define an empty array
var empty = [];

// define an array with items
var temp = [1, 2, '3', "four", true];

// refer to an item in the array by its index

temp[0]
// 1

temp[2]
// '3'

temp[4]
// true

// arrays have useful methods
temp.length
// 5
```

- ```console.log``` lets us write messages to the console if it exists

- Objects are used to store many *keys* and their corresponding *values*. Objects use curly brackets. Each value in an object has a *key*. Object keys are strings, object values can be of any type. 

- [Reference to Object methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor)

```js
// define an empty object
var obj = {};

// create a new item in the object
obj['one'] = "a string value";

// use the other syntax to create another item
obj.two = 42;

// log the object
console.log(obj);
/*
Object {
  one: "a string value"
  two: 42
}
*/

// delete an element from the object
delete obj.one;

// log the object again
console.log(obj);
/*
Object {
  two: 42
}
*/


```


- ```for``` loops allow us to create a code loop. We define a loop variable and its start and end conditions, and increment count

```js
// set the loop variable to 1, run the loop until the loop variable is 5, increment by 1 each loop
for (var i = 1; i < 5; i++) {
  console.log(i);
}
// 1
// 2 
// 3
// 4

// set the loop variable to 0, run the loop until the loop variable is 10, increment by 2 each loop
for (var i = 0; i < 10; i += 2) {
  console.log(i);
}
// 0
// 2 
// 4
// 6
// 8

// let's use a for loop to loop through an array and log the values 
var a = [1, "two", 3];
for (var i = 0; i < a.length; i++) {
  console.log(a[i]);
}
// 1
// two
// 3


```


