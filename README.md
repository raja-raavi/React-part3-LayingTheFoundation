# Episode 3 : part : 1

TO start our react app we use "npx parcel index.html" but we have scripts section in package.json file

we can configure the strat and build PROD commands there and we can use it like a shortcut

"script" : {

    "start" : "parcel index.html",

    "build" : "parcel build index.html"

}

From now we can use "npm run start" or "npm start" to start in dev mode

"npm run build" for build mode

Note : "npm build" will not work we should add run for build

npm start = npx parcel index.html - behind the scenes it will execute the parcel package with index.html as soruce

npm run build = npx parcel build index.html

Episode 3 : part : 2

===================

What the DOM elements - head, body, style, script, etc simillarly in React we have React elements which are kind of equilent to DOM elements

Everyone think like React.createElement is a HTML element - No, It's a React element

const heading = React.createElement("h1", {id: "heading"}, "Namaste React"); to create Elemet but if we have nested structres then it very difficult to make

so Facebook developers think that this is not the good way to create the Elements and they introduced the "JSX"

Many of us think that JSX is a part of Recat - No, JSX is different and React is different

React.createElement => Object => When this render this object in DOM it will covert into HTML element

Usually eveyone practices with like below "Not Render" that means if any thing but in the rendering then we can not rendered

<div id = "root">
<p> Not Rendered </p>
</div>
 
Episode 3 : part : 3

===================

React.createElement => React Element - JS object => HTML Element(render)

JSX => React.createElement => React Element - JS object => HTML Element(render)

Normally we use int thre core of React.createElement("h1", {id: "heading"}, "Namaste React"); to create Elemet but if we have nested structres then it very difficult to make

so Facebook developers think that this is the good way to create the Elements and they introduced the "JSX"

Many of us think that JSX is a part of Recat - No, JSX is different and React is different

How should we write the React.createElement("h1", {id: "heading"}, "Namaste React"); using JSX

const JSXHeading = <h1 id = "heading"> Namaste React using JSX</h1>

Many of us think we are writting HTML inside java script - NO, The above one is not the HTML it is JSX

Then what is JSX - JSX is a HTML like syntax

By the end of the day both JSX and Recat.createELement both are objects only

console.log(heading);

console.log(JSXHeading);

Do you think that JS engine and browser will understand the below line - No, It will not the pure JS, The broweser and JS engines will only understand ECMA 6.

If we execute the below one inside console you got error

const JSXHeading = <h1 id = "heading"> Namaste React using JSX</h1>

If No then, Then how this code is execting and how you can see the output - Parcel is doing this job behind the scenes

React dsn't understnad JSX - Babel will convert JSX into Recat code.

Let me show u the ddifference bw HTML and JSX - In JSX wwe have provide the className="heading" whereas in CSS class="heading" and if you open console and check the className
will be converted into Class using Bable

Note: JSX attributes always should be camel case
Note: If we are writting JSX in multiple lines it shoild be enclosed in paranthesis () because Babel needs to understand whetre JSX is starting and ending

# Episode 3 : part : 4

======================

## React Components :

1. Class Based Components - OLD way of writting code
2. Functional Based Components - NEW way of writting code

NOTE : FUnctional componengts always strats with Camel Case letter then only Bable will understand it's a functional component

Functional Based Components are normal JS functions and it will return some piece of JSX code
Abbrevation: A function which retuns a piece of JSX code or React Element

\*\*\* The component which is rendering inside another component is called component composition

{} - we can execute every JS code inside these braces

\*\* You can ask me, If all JS code can execute inside braces then while making API call if miscellionous data attacks then what happen? JSX will take care and it sanitizes the data before bable conversion
If anything risky then JSX will skip that code

** We can compose any react elemenet inside react element
** A component inside react element
\*\* A react element inside a component
