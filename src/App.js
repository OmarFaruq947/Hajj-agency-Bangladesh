import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/HomePage/Home";

import About from "./Component/Pages/About/About";
import Booking from "./Component/Pages/Booking";
import Contact from "./Component/Pages/Contact";

import Login from "./Component/Pages/Authentication/Login";
import Registration from "./Component/Pages/Authentication/Registration";
import AllFaq from "./Component/Pages/Faq/AllFaq";
import InformationPlace from "./Component/Pages/InformationPlace/InformationPlace";
import Locations from "./Component/Pages/Location/Locations";
import Navbar from "./Component/Pages/Navbar";
import News from "./Component/Pages/News/News";
import NoMatch from "./Component/Pages/NoMatch";
import TinyNavbar from "./Component/Pages/TinyNavbar";

function App() {
  return (
    <div className="App ">
      <TinyNavbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/information" element={<InformationPlace />}></Route>
        <Route path="/faq" element={<AllFaq />}></Route>
        <Route path="/location" element={<Locations />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
