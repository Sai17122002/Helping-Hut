import HeaderImage from "../image/hhLogo.jpg";
import { HashLink } from "react-router-hash-link";

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
          <HashLink to="/#aboutus">About</HashLink>
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
