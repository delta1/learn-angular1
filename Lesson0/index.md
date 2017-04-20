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

temp = 42
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
- ```if``` statements evaluate a boolean expression and execeute the first code block if true, or the else code block if false

```js
if (true) {
  alert('true block will be executed because true is always true');
}
else {
  alert('else block will not be executed');
}

if (5 < 3) {
  alert('this block will not execute because 5 is not less than 3');
}
else {
  alert('this else block will be executed because 5 is not less than 3');
}
```



