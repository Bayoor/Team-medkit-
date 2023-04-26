import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Layout from "./layout/Layout";
import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/service";
import ContactUs from "./pages/contact";
import LogIn from "./pages/login";
import SignUp from "./pages/signup";
import Appointment from "./pages/appointment";
import ErrorPage from "./pages/404page";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path={`/`} element={<Home />} />
          <Route exact path={`/about`} element={<About />} />
          <Route exact path={`/services`} element={<Service />} />
          <Route exact path={`/contact`} element={<ContactUs />} />
          <Route exact path={`/login`} element={<LogIn />} />
          <Route exact path={`/signup`} element={<SignUp />} />
          <Route exact path={`/appointment`} element={<Appointment />} />
          <Route exact path={`/404page`} element={<ErrorPage />} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
