import "./App.css";
import "./cards.css";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Projects from "./components/Projects";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Menu></Menu>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/projects" element={<Projects></Projects>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
