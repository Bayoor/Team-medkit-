import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "./layout/Layout";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path={`/`} element={<Home />} />
          <Route exact path={`/about`} element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
