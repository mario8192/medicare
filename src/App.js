import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/AppNavbar/AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BrowsePage from "./pages/BrowsePage/BrowsePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <BrowsePage />
          </Route>
          <Route path="/inventory" exact>
            <InventoryPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
