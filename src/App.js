import "./App.css";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact.js";
import ScrollToTop from "./Components/ScrollToTop";
import Overview from "./Components/Overview";
import Motive from "./Components/Motive";
import Teams from "./Components/Teams";

function App() {
  return (
    <>
      {/* <div className="top"></div> */}
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Overview" element={<Overview />} />
        <Route path="/OurMotive" element={<Motive />} />
        <Route path="/Teams" element={<Teams />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
