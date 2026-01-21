import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import Layout from "./Layout";
import Home from "./pages/Home";
import Me from "./pages/Me";
import Skill from "./pages/Skill";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/"element={<Home/>}/>
              <Route path="/me"element={<Me/>}/>
              <Route path="/skill"element={<Skill/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
