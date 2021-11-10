## Wednesday 8th September 2021
*******************************************
# MODERN REACT AND REDUX
*******************************************

JSX – JavaScript XML. It is simply a syntax extension for JavaScript. It allows us to write directly HTML in React(within JavaScript Code)… Instead of separating the markup and logic in separated file, React uses components for this purpose.
Components  in React – Basically returns a piece of JSX code that tells what should be rendered on the screen. 
*******************************************
JSX Elements
1. Tell React to create a normal HTML Element (div, span, h1, table, hr, input)
2. Tell React to show another component. (Field, Language, Translate)<br/>
React - knows how to work with components (called a reconciler)<br/>
ReactDOM - knows how to take instructions on what we want to show and turn it into HTML (called renderer)<br/>
Babel -  Commandline tool that can take any version of JS and spit out a newer version Ex; ES2015, 2016, 2017, 2018 -> ES5 -> Display content to browser.<br/>
procedure:<br/>
$ node -v<br/>
$ npm install -g create-react-app<br/>
$ create-react-app *name_of_the_project*<br/>
$ cd *project*<br/>
$ npm start<br/>
$ code . <br/>

*******************************************
# REACT-CMDS
$ npm install -g create-react-app <br/>
$ create-react-app *name of the project*<br/>
$ npx create-react-app *name of the project*<br/>
$ sudo apt-get remove nodejs <br/>
$ sudo apt-get remove npm <br/>
$ which node <br/>
$ node -v <br/>
$ code . <br/>
$ npm start <br/>
$ npm install --save faker <br/>
$ npm install --save axios <br/>
*******************************************

## Introduction 
1. Nodejs Installation
$ node -v
2. Create React-app
$ npm install -g create-react-app
$ create-react-app *project_name*
$ code .
$ npm start
3. JS Module Systems 3 parts.
- Import the React and ReactDOM libraries.
- Create React Component either function based or class based component,
  which produce HTML and show to the user, handle feedback using Event handlers.
- Take the react component and show on the screen
ReactDOM.render(
<App/>, document.querySelector('#root');
);
4. Displaying content with functional component
## Chapter 2: Building content with JSX.
1. What is JSX
2. HTML to JSX
3. Inline styling with JSX
 - {{backgroundColor: 'blue'}}
4. Class vs ClassName
5. Referencing JS variable
6. Finding forbidden property name
 - forName?
## Chapter 3: Communication with Props.
1. Three tenets of Components. 
 - Component nesting - a component shown inside another component
 - Component reusabilitty - make a component which can be easily reused through our application
 - Component Configuration - Configure a component once it has been created. 

2. Styling using Semantic-UI
 - set up semantic ui inside index.html
3. Naive component Approach
- create a blog post comment. 
4. Specifying images 
 - install faker js (npm install --save faker)
 - faker.image.avatar();
5. Duplicating a single component
6. Extracting JSX to new component
7. Component Nesting
 - export default ProjectName;
 - import ProjectName from './ProjectName';
8. React's Props System (Properties)
 - Props - System for passing data from a parent component to a child component.
 - Goal is to customize or configure a child component. 
9. Passing and Receiving Props.
10. Passing Multiple Props.
11. Components Reuse
12. Implementation of an approval card
13. Showing Custom Children.
 - {props.children}
14. Component Reuse Approval Card
## Chapter 4: Structuring Apps with Class-based Components.
1. Class Based Component.
- *component* -> Function or class that produces HTML and display to the user using JSX and handles feedback from the user using Event Handlers. 
 - REACT PREVIOUSLY:
 - *Functions* => produce JSX to show content to the user 
 - *Class* => 
 - produce JSX to show content to the user (r1)
 - Lifecyle method system to run code at specific point in time(r2)
 - state system to update contents on screen (r3)
 - HOW REACT IS NOW
- *function components* => r1.ref()
- can use hooks to run code at specific point in time. 
- Use hooks to access state system and update content on screen. 
- *class components* => <br>
- r1.ref()
- r2.ref()
- r3.ref()
- Realword application:
- Class based components - Established projects whereas hybrid (both) Newer Projects.
- Really hard -> Learn Hooks -> Learn Redux.
- Much easier -> Learn Class components -> Learn Hooks -> Learn Redux.
2. Application Overview.
- Function components -> Good for simple content. 
- Class components -> Good for just about everythihng else.
- 'state' system -> handle user input.
- understanding lifecycle events -> easier to do things when the app first starts.
3. Scaffolding the App. 
4. Getting a Users Physical location
- window.navigator.geolocation.getCurrentPosition((position) => console.log(position), 
  (err) console.log(err))
5. Resetting Geolocation Preference
6. Handling Async Operations with Functional Components.
7. Refactoring from Functional to Class Component.
- *Rules of Class Components*
- 1. Must be a Javascript class.
- 2. Must extend (subclass) React.Component
- 3. Must define a 'render' method that returns some amount of JSX.
## Chapter 5: State in React Components
1. The rules of state
- Only usable with class components (Technically can be used with functional components using hook's system)
- You will confuse props with state :(
- State is a 'JS' object taht contains data relevant to a component
- Updating 'state' on a component causes the component to (almost) instantly rerender.
- State must be initialized when a component is created.
- State can only be updated using the function; 'setState'
- can be initialized using the constructor or outside the constructor
2. Important Note about super(props) Deprecation. 
- Note that it is not deprecated as per official React Documentation 
- This is just a bug between Typescrips, React and code editor.
3. Initializing State through Constructors.
- constructor(props){
	super(props); // reference to parents constructor
}
4. Updating State properties.
- this.setState();
5. App Lifecycle Walkthrough.
6. Handling Errors Gracefully.
7. Conditionally Rendering Content.
##  Chapter 6: Understanding Lifecycle methods
1. Introduction to lifecycle methods
- components of life cycle
* constructor
* Render (mandatory) return some JSX
* componentDidMount() initial data loading - sit and wait for updates 
* componentDidUpdate() called everytime an update is done or made - sit and wait until this component is no longer shown
* componentWillUnmount() - remove some component on screen and do a clean up after just for cleanup 
2. Why life cycle methods
- other life cycle methods rarely used 
* shouldComponentUpdate();
* getDerivedSateFroProps();
* getSnapShotBeforeUpdate();
3. Refactoring data loading to lifecycle methods.
- using componentDidMount() to initialize instaed of using the constructor to initialize 
4. Alternate state initialization
- this.state = {lat: null}; <-> state = {lat: null};
5. Passing a state as props
- <SeasonDisplay lat={this.state.lat}/>
6. Determining season
7. Termiar expressions in JSX.
8. sHOWING ICONS
9. Extracting options to config objects.
10 Styling
11. Showing a load spinner
12. Specifying Default props.
- {props.message || 'Loading...'}
- Spinner.defaultProps = {
	message: 'loading...'
};
13. Avoiding conditionals in Render
- {this.rendercontent()}
14. Review;
Benefits of class components
- Easier code organization 
- Can use 'state' (another react system) which is easier to handle user input
- Understand lifecycle events - Easier to do things when the app first stars.
## Chapter 7: Handling User Input with Forms and Events.
1. Application overview
- How do we get feeback from the user?
- How do we fetch data from some outside API?
- How do we show list of records?
2. Component design.
3. Adding some project structure.
- Create new folder hosting all components.
4. Showing forms to the user. <br>
4.1 Add a touch of style
5. Creating Event Handlers.
- onClick() - user clicks on something
- onChange() - user changes text in an input
- onSubmit() - use submits a form. <br>
5.1 Alternative Event handler syntax
* Arrow function () => onInpuChange(event){
console.log(event.target.value);
} onChange{this.onInputChange}
Abbr <=> onChange{onChange{(event) => console.log(event.target.value)}}
6. Uncontrolled vs controlled Elements
- user types input 
- callback gets invoked 
- We call setState with a new value 
- Component re-renders.
- Input is tld what it's value is (coming from state)

Key difference between controlled and uncontrolled elements <br>
Controlled - Store information inside of component on state propery as opposed to storing information inside DOM 
<br>
React world vs DOM World
state => {term: ''}	<input value = {go look at state to get current value} />
<br>
- React is the one driving and storing all of our data and not HTML side of things (controlled components)
- Assignment => user enter password and warning disappers if yuser enters value > 4. 
7. Handling Form submittal 
8. Understanding 'this' in JavaScript
- What is 'this' used for in a class?
- How is the value of 'this' determined in a function. 
(i) constructor(){
	this.drive - this.drive.bind(this);
}
(ii) onFormSubmit = (event) => {
	// code stub
}
(iii) onSubmit = {(e) => this.onFormSubmit(e)}

9. Communicating child to parent.
 - Note: props -> parent -> child and not the other way round.
10. Invoking callbacks in children
- Note using props.
- Function based component -> props.message
- Class based component -> this.props.message

## Chapter 8: Making API Requests with React.
1. Fetching data 
- unsplash/developers. 
2. Axios vs Fetch
- Axios - 3rd party package.
- Fech - Functon built into modern browsers.
- install axios
$ npm install --save axios 
<br> 
3. Viewing Request Results. 
4. Handling requests with Async Await. 
- whenever we make a request with axios it returns an object called a promose. A promise is an object that will esentially give a little notification when some amount of work like a network request is completed. 
<br>
axios.get('https://api.unpslash.com/search/photos', {
	params: {query: term},
	headers:{
		Authorization: client-ID "key"
	}
}).then()
<br>
async onSearchSubmit(term){
	const response = await.axios.get()
}
5. Setting state after async requests. 
6. binding callbacks 
- Solution is to create an arrow function 
onFormSubmit = asnc (response) => {
	// code snippet 
}
7. Creating custom clients.

## Chapter 9: Building Lists of Records.
1. Rendering lists.
2. Review of Map statements.
- numbers.map(() => {
	// num * 10; 
}
3. Rendering lists of components.
4. The purpose of keys in lists.
- Performance since it uniquely identifies a list.
5. Implementng keys in lists.

## Chapter 10: Using Refs for DOM Access.
1. Grid CSS
-  issues with grid css.
2. Creating an Image Card Component. 
- grid-row-end
3. Accessing the DOM with Ref.
- Let the imageCard render itself and its image
- Reach into the DOM and figure out the height of the image
- Set the image hight on state to get the component to rerender.
- When rerendering, assign 'grid-row-end' to make sure the image, takes up the appropriate space.
React Refs <br>
- Gives access ot a single DOM element.
- We create refs in the contructor, assign them to instance variables, then pass to a praricular JSX element as props.
4. Accessing Image height 
- constructor(props) {
	super(props)
	this.imageRef = React.createRef();
}
5. Callbacks on Image Load.
- componentDidMount(){
	this.imageRef.current.addEventListener('load', this.setSpan);
}
6. Dynamic Spans.
7. App Review.
- Anytime you have a callback function its safe to use an arrow function.
- Props system - communicate from parent down to a child.
- Rendering a list - use map function. 
- Anytime we want to interact with an individual element  inside a DOM  we use a reference. (this.imageRef = React.createRef());

## Chapter 10: Let's Test your React Mastery (Create a Youtube Application using React and Youtube API Requests)
1. App overview. 
- youtube public free API
2. Component Design 
3. Scaffolding the App
- Setup boiler plate. 
4. Reminder on Event Handlers.
- controlled vs uncontrolled components. 
- onChange
- callback functions. 
5. Handling Form submittal. 
6. Accessing the youtube API
- API key (console.developers.google.com)
7. Searching for videos.
- youtube api search. 
- Adding a videotype to avoid warnings of each child should have a unique key
8. Putting it all together. 
9. Updating State with Fetched data.
10. Pasing state as props.
- {this.state.videos}
11. Rendering a list of videos. 
12. Rendering video Thumbmnails. 
- styling a list. 
13. Communication from child to parent 
14. Deeply nested callbacks. 
NOTE: CALLBACK FUNCTION - function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or actions. 
15. Conditional Rendering. 
- stylng the video details. 
16. Displaying a video player. 
- Iframe - makes a request to some outside website besides the one the user is visiting. 
- ES2015 template string: `https://www.youtube.com/embed/${video.id.videoId}`
- Fixing a a few warnings. 
17. Defaulting video selection. 

## Chapter 11: Understanding Hooks System in React
1. React Hooks <br>
	useState - function that lets you use state in a functional component. <br>
	useEffect - function that lets you use something like lifecycle methods in a functional component. 
	useRef - Function that lets you create a ref in a function component. 

	Hooks are a way to write reusable code, instead of more classic technique like Inheritance. 
	Primitive hooks. 
	- useState, useEffect, useRef, useContext, useReducer, useCallback, useMemo, useImperativeHandle, useLayoutEffect, useDebugValue <br>
	- customHook - Reuse primitive hook. 
	- Accordion - GRaphical contorl element comprising a vertically stacked list of items, such as thumbnails. Each item can be "expanded" or "collapsed: to reveal
	the content associated with that item. 
2. App Architecture. 
	- Accordion Application. 
3. Comminicating item props. 
	- create array pass content to the derived component. 
4. Building and styling the accordion. 
5. Helper function in Function Component.
6. Introducing useState. 
	- This just entails adding the {useState} from 'react'.
7. Understanding useState.  
	- Array destructuring. 
8. Settter function. 
	- SetActiveIndex(index) As soon as we  all any setter function from useState hook our entire component will rerender automatically. 
9. Expanding on useState. 
10. Exercise on useState. 
	- Building an application which entails a button which you click and it automatically increments by one. 
11. Creating a search widget architecture. 
	- Wikipedia API. - This application entails building a search component in which the user is going to enter a search term and the wikipedia API is going to be called with the search results. 
12. The useEffect Hook. 
	- This allows function component to use something like lifecycle methods
	- We configure the hooks to run some code automatically in one of the three scenarios. 
	1. When the component is rendered for the first time only. 
	2. When tehh component is rendered for the first time and whenever it rerenders. 
	3. When the component is rerendered and whatever it rerenders and some piece of data has changed. 
	useEffect second argument. 
	4. Illustration.
	- [] - runs at initial render. 
	- [data] - Run at initial render and runs after every re-render if data has chanced since the last render. 
	- ... nothing - Run at initial Render and runs after every re-render. 
13. Async code in useEffect. 
14. Executing the request from the useEffect. 
15. Default search terms. 
16. List building. 
17. XSS ATtacks. <span dangerouslySetInnerHTML>
18. Linking to a wikipedia page. 
19. Only search with a term. 
20. Throttling API request, using debounced term. 
21. Reminder on setTimeout and clearTimeout;
22. useEFfects cleanupFunction. which returns a function which will clean up the timeout function. 
23. Implementing a delayed request. 
24. Searching on initial render. 
30. Optional video fixing warning. 
31. Dropdown architecture.
32. Reminder on Event Bubbling. 
33. Application. 
	- Dropdown needs to detect a click event of any element  besides one it created. 
	- Dropdown has a hardtime setting up event handlers on elements that it does not create.
	- Event bubbling is a thing 
	- document.body.addEventListener('click', () => console.log('click'))
34. Binding on Event Handler. 
35. make use of useRef();
36. Body Event listner cleanup. 
37. The translate widget. 
38. Scaffoldijng the Translate component. 
39. Adding a language input. 
49. Google Translate API key.
50. Building the convert component. 
51. Using the Google translate API.
52. Displaying translated text. 
53. Debouncing translation updateds. 
54. Reviewing useState and useEffect.
 
 ## Chapter 13: Navigation from scratch. 
1. Navigation in React. 
2. Basic component Routing. 
	- localhost:3000/translate -> domain: port: pathname
3. Bulding a reusable route component. 
4. Implementing a header for Navigation. 
5. Handling navigation. 
	- onPageRefresh, user clicks on to a URL. 
6. Building a list. 
7. Changing the URL. 
	- window.history.puushState({}, '', '/translate');
8. Detecting Navigation. 
9. Updating the Route. 
10. Handling command clicks. 
	- if(event.matekey || event.ctrlKey){return; }














 

