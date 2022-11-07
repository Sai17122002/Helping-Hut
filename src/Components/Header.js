import HeaderImage from "../image/hhLogo.jpg";
import { HashLink } from "react-router-hash-link";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header-top"></div>
      <header>
        <div class="logo">
          <img
            src={HeaderImage}
            alt="Helping Hut Logo"
            width="55"
            height="50"
          />
          <p>Helping Hut</p>
        </div>
        <nav class="navbar">
          <HashLink to="/#home">Home</HashLink>
          <HashLink className="aboutus" to="/#aboutus">
            About Us
            <div className="aboutus-part">
              <HashLink className="overview" to="/Overview">
                Overview
              </HashLink>
              <HashLink className="ourmotive" to="/OurMotive">
                Our Motive
              </HashLink>
              <HashLink className="teams" to="/Teams">
                Our Teams
              </HashLink>
            </div>
          </HashLink>
          <HashLink to="/#ourworks">Works</HashLink>
          <HashLink to="/contact">Contact</HashLink>
          <div class="buttons">
            <button class="joinUs">join us</button>
            <button class="donate">donate</button>
          </div>
        </nav>
      </header>
      <div className="line"></div>
    </>
  );
};

export default Header;
