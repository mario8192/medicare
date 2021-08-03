import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/AppNavbar/AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar/Sidebar";
import ItemView from "./components/ItemView/ItemView";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <ItemView />
    </div>
  );
}

export default App;
