import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Component/Home/Home/Home';
function App() {
  return (
      <Router>
        <Switch>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Router>
      
  );
}

export default App;
