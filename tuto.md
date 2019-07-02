<h2>HTML</h2
<div>
HTML (Hyper Text Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables. HTML is not a programming language; it is a **markup language** **that defines the structure of your content.

 All HTML documents must start with a document type declaration : &lt;!DOCTYPE html&gt;. The HTML document itself begins with &lt;html&gt; tag and ends with &lt;/html&gt;. The visible part of the HTML document is given between &lt;body&gt; tag and ends with &lt;/body&gt;. Each tag is contained with in a less than and a greater than angle brackets, and everything between opening and closing tag is displayed or affected by the tag. An image of a simple html document is given below.

The box above contains the key ingredients for a basic web page. The first line (DOCTYPE) describes what version of HTML was written in so that an internet browser can interpret the text that follows. Next, the HTML opening tags lets the browser know that it is reading HTML code. The HTML tag is followed by the head section which contains the information about the page such as its title , meta tags, and where to locate the CSS file. The body section is all content that is viewable on the browser. HTML files uses eithe .htm or .html file extensions. Details about various HTML tags can be found here : <https://html-css-js.com/html/tags/> .
</div>

<h2>JAVASCRIPT</h2>

<h3>What is JavaScript?</h3>

JavaScript is a high level, interpreted programming language that conforms to the ECMAScript specification. JavaScript is not a programming language in strict sense. Instead, it is a scripting language because it uses the browser to do the work. JavaScript is most commonly used as a client side scripting language. This means that JavaScript code is written into an HTML page inside script tag. When a user requests an HTML page with JavaScript in it, the script is sent to the browser and it’s upto the browser to do something with it.

JavaScript is case sensitive and uses the unicode character set. In JavaScript, instructions are called statements and are separated by semicolons (;). A semicolon is not necessary after a statement if it is written on its own line. But if more than one statement on a line is desired, then they must be separated by semicolons.

<h3>Comments in javaScript</h3>

Comments behave like whitespace and are discarded during script execution. The box below contains single line comment and multi line comment.

<h3>Declarations in JavaScript</h3>

There are three kinds of declarations in JavaScript.
-   var : Declares a variable, optionally initializing it to a value.
-   let : Declares a block-scoped, local variable, optionally initializing it to a value.
-   Const : Declares a block-scoped, read-only named constant. A constant cannot change value through assignment or be re-declared while the script is running. It must be initialized to a value.

The scope rules for constants are the same as those for let block-scope variables. If the const keyword is omitted, the identifier is assumed to represent a variable. You cannot declare a constant with the same name as a function or variable in the same scope.

<h3>Data structures and types</h3>

The latest ECMAScript standard defines eight data types:



-   Seven primitive datatypes

    -   Boolean
    -   null
    -   undefined
    -   Number
    -   BigInt
    -   String
    -   Symbol

-   objects

<h3>Objects in JavaScript</h3>

Objects, in JavaScript, is most important data-type and forms the building blocks for modern JavaScript. These objects are quite different from JavaScript’s primitive data-types(Number, String, Boolean, null, undefined and symbol) in the sense that while these primitive data-types all store a single value each (depending on their types).Objects are more complex and each object may contain any combination of these primitive data-types as well as reference data-types. Objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs.

Declaring  an object.

var person = {};<br>
The object properties and methods can be accessed using dot notation. The syntax is given below.<br>
Syntax :  objectname.objectproperty<br>

for example, 

        var cars={ ”company” : ”Maruti Suzuki”, 
		“model” : [“Brezza” , ”Swift” , “Ertiga”] };
In the above example, we have declared an object named cars. Model and company are the properties of the object cars. Using dot notation 

cars.model[0]  : will return Brezza.<br>
cars.company  : will return  Maruti Suzuki.<br>
Cars.model : will return Brezza,Swift,Ertiga.<br>

Similarly, methods can also be written inside an object. As per conventions, functions associated with an object is known as methods. A function is an independent sequence of a bunch of statements whereas a method is associated to an object and is generally referenced by the ‘this’ keyword.

<h3>Arrays in JavaScript.</h3>

Arrays in JavaScript is a special type of variable which can hold more than one value at a time.

Syntax for creating an array : var arrayname=\[value1,value2.......value n \]

for example, 
        
        var fruits=[“pineapple”, ”apple”, ”orange”]

To access items in the array : var fruit1 = fruits\[0\] : it returns pineapple to fruit1.

Refer more about arrays on : <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>

<h2>ECMAScript</h2>

ECMAScript is a scripting -language specification standardized by ECMA international. It was created to standardize JavaScript. ECMAScript6 has a lot of forward -thinking ideas attached to it and is really exciting programming language to use.

<h3>Features Of ES6.</h3>

-   let is preferred over var in ES6. Variables decalred by let have their scope within the block they are defined.

        for (let i = 0; i < a.length; i++) {
                let x = a[i]
                …
        }

-   ES6 also introduced a new variable keyword: const . Variables declared with the const keyword are block scoped just like let however they cannot change by reassignment and they cannot be re-declared; they are immutable.

        const PI = 3.141593

-   The for/of loop uses the iterable protocol to create a loop. Strings, Arrays, Typed Arrays , map, Set, NodeList and custom iterable function hook can all be used with for/of .

        for (var value of myArray) {
        console.log(value);
        }

-   Template literals are very handy for string that use variable , or need to make use of a quick javaScript expression. Template literals are enclosed with in back ticks.template literals can also have place holders, these are declared with a dollar sign and curly braces

        ${placeholder}

-   Arrow functions, they are a shorthand syntax for functions that do not contain its own this, arguments, super, or new.target and cannot be used as constructors.

        // ES5
        var x = function(x, y) {
         return x * y;
        }
        // ES6
        const x = (x, y) => x * y;

-   Spread operator allows an iterable such as an array expression or string to be expanded in places where zero or more arguments or elements are expected , or an object expression to be expanded in places where zero or more key-value pairs are expected.

        let objClone = { ...obj };

-   Getters and setters allow read and write access to class properties without having to define methods. Getters and setters are accessible by inherited classes.

<h2>Node Js</h2>

Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Node.js is often used for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Wallmart and so on.

<h3>Applications of Node Js</h3>

-   Complex Single-Page applications
-   JSON APIs based application
-   Streaming apps
-   Real Time Chats

The node package manager (NPM) provides access to hundreds of thousands of reusable packages. Though it’s not required, it’s generally good practice to include a package.json file with each node project. This file stores metadata about your project like author, license, as well as any dependencies on other node packages. You can manually create the file, but the command npm init will prompt you with a series of questions.

After answering the prompts you’ll see something like the following in a new package.json file:

A simple node application can be viewed here https://github.com/indrajithvenu007/node_crud

<h3>Steps to create a node application</h3>

1.  Create an empty directory.
2.  Open up the console, navigate to our new directory and run npm init.
3.  Fill out the required informations to initialize our project.
4.  With in our project directory , create a file named server.js,  this file will contain the code for our application.
5.  After this , first thing to do is get the server up and running. For this purpose we use Express. Express is a webframework for Node.js .

-   To use express, first install Express using , 
        
        npm install --save express
-   then we have to require express in our js file then, we create an instance named app by invoking Express as given below.

        const express = require(‘express’)




-   Next step is to create a server as given below,
 
        app.listen(port, ()=&gt;{console.log(\`App running on port ${port}\`)})

-   We can test our server by running,

        node server.js

-   Connecting to database is as shown below, 

        const Pool = require(‘pg’).Pool

        const Pool = new Pool({

        user : ‘appuser’,

        host : ‘localhost’,

        database : ‘api’,

        password : ‘postgrespass’,

        port : 5432

        })

