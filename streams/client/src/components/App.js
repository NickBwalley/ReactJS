import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      <h2>This is Page One</h2>
      <a href="/pagetwo">Navigate to PageTwo!</a>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <h2>This is Page Two</h2>
      <a href="/">Navigate to PageOne!</a>
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
