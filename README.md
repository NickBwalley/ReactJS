###### Wednesday 8th September 2021
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

###### Introduction 
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
###### Chapter 2: Building content with JSX.
1. What is JSX
2. HTML to JSX
3. Inline styling with JSX
 - {{backgroundColor: 'blue'}}
4. Class vs ClassName
5. Referencing JS variable
6. Finding forbidden property name
 - forName?
###### Chapter 3: Communication with Props.
1. Three tenets of Components. 
 - Component nesting - a component shown inside another component
 - Component reusabilitty - make a component which can be easily reused through our application
 - Component Configuration - Configure a component once it has been created. 

2. Styling using Semantic-UI
 - set up semantic ui inside index.html
3. Naive component Approach
4. Specifying images 
 - install faker js (npm install --save faker)
 - faker.image.avatar();
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
 - {props.children}
14. Component Reuse Approval Card
###### Chapter 4: Structuring Apps with Class-based Components.
1. Class Based Component.
2. Application Overview.
3. Scaffolding the App. 
4. Getting a Users Physical location
- window.navigator.geolocation.getCurrentPosition((position) => console.log(position), 
  (err) console.log(err));
5. Resetting Geolocation Preference
6. Handling Async Operations with Functional Components.
7. Refactoring from Functional to Class Component.
###### Chapter 5: State in React Components
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
######  Chapter 6: Understanding Lifecycle methods
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
####### Chapter 7: Handling User Input with Forms and Events.
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

####### Chapter 8: Making API Requests with React.
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




