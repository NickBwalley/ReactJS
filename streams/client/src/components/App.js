import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      <h2>This is Page One</h2>
      <Link to="/pagetwo">Navigate to PageTwo!</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <h2>This is Page Two</h2>
      <Link to="/">Navigate to PageOne!</Link>
    </div>
  );
};

const App = function () {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
// other routers that are used in a react application
// HashRouter -> uses everthing after a # as the path localhost:3000/#/pagetwo
// MemoryRouter -> doesn't use the URL to track navigation localhost:3000/
// BrowserRouter => uses everything after hte TLD or port as the path localhost:3000/pagetwo
