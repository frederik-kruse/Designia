import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import forside from "./Pages/Forside/Forside";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={forside} />

          <Route path="/404" component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
