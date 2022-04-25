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
      <Router >
        <Routes>
          <Route path="portfolio/" element={<Home></Home>} /> 
          <Route path="https://genosynth.github.io/portfolio/projects" element={<Projects></Projects>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
