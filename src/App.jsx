import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Layout from "./layout/Layout";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {/* children */}
        <Routes>
          <Route exact path={`/`} element={<Home />} />
          <Route exact path={`/about`} element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
