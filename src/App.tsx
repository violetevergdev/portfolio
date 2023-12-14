import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Contacts from "./pages/Contacts.tsx";
import { Route, Routes } from "react-router-dom";
import SingleProject from "./pages/SingleProject.tsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/single-project/:id" element={<SingleProject />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
