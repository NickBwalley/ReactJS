###### Wednesday 8th September 2021
*******************************************
# REACT JS
*******************************************

JSX – JavaScript XML. It is simply a syntax extension for JavaScript. It allows us to write directly HTML in React(within JavaScript Code)… Instead of separating the markup and logic in separated file, React uses components for this purpose.
Components  in React – Basically returns a piece of JSX code that tells what should be rendered on the screen. 
*******************************************
JSX Elements
1. Tell React to create a normal HTML Element (div, span, h1, table, hr, input)
2. Tell React to show another component. (Field, Language, Translate)

*******************************************
# REACT-CMDS
###### Alternative 1
$ npm install -g create-react-app <br/>
$ create-react-app *name of the project*

###### Alternative 2
$ npx create-react-app *name of the project*

###### remove nodejs
$ sudo apt-get remove nodejs <br/>
$ sudo apt-get remove npm
$ which node

#### ReactJS-Concepts
###### Introduction 
1. Nodejs Installation
2. Create React-app
3. JS Module Systems 3 parts.
4. Displaying content with functional component
###### Chapter 2
1. What is JSX
2. HTML to JSX
3. Inline styling with JSX
 - {{backgroundColor: 'blue'}}
4. Class vs ClassName
5. Referencing JS variable
6. Finding forbidden property name
 - forName?
###### Chapter 3
1. Three tenets of Components. 
 - Component nesting - a component shown inside another component
 - Component reusabilitty - make a component which can be easily reused through our application
 - Component Configuration - Configure a component once it has been created. 

2. Styling using Semantic-UI
 - set up semantic ui inside index.html
3. Naive component Approach
4. Specifying images 
 - install faker js (npm install --save faker)
5. Duplicating a single component
6. Extracting JSX to new component
7. Component Nesting
8. React's Props System (Properties)
 - Props - System for passing data from a parent component to a child component.
9. Passing and Receiving Props.
10. Passing Multiple Props.
11. Components Reuse
12. Implementation of an approval card
13. Showing Custom Children.
###### Chapter 4
1. Class Based Component.
2. Application Overview.
3. Scaffolding the App. 
4. Getting a Users Physical location
- window.navigator.geolocation.getCurrentPosition((position) => console.log(position), 
  (err) console.log(err));
5. Resetting Geolocation Preference
6. Handling Async Operations with Functional Components.
7. Refactoring from Functional to Class Component.
###### Chapter 5
1. The rules of state
- using constructor
2. Important Note about super(props) Deprecation. 
3. Initializing State through Constructors.
4. Updating State properties.
5. App Lifecycle Walkthrough.
6. Handling Errors Gracefully.
