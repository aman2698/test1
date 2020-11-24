import logo from "./logo.svg";
import Test from "./components/Test";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Contactus from "./components/contactus";
import Login from "./components/login";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2> welcome</h2>
      </header>
      {/* <Login /> */}

      <BrowserRouter>
        <Switch>
          <Route>
            <Link to="/contactus">
              <Test />
            </Link>
          </Route>
          <Route path="/contactus">
            <Contactus />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
