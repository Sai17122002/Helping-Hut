import Niti from "../image/NITI_Aayog_logo.svg.png";
import Darpan from "../image/Darpan-logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <section class="footer">
      <div class="helping-hut">
        <h1>Helping Hut</h1>
        <p>
          Helping Hut is a not for profit non government organization with the
          visions like helping poor in any way possible, stopping beggary by
          giving them some occupation and helping poor kids in getting
          education.
        </p>
        <h1 style={{ padding: "1rem" }}>Verified by</h1>
        <div class="footer-images">
          <img width="70" height="50" src={Niti} alt="NITI_Aayog_logo" />
          <img width="80" height="40" src={Darpan} alt="Darpan-logo" />
        </div>
      </div>

      <div class="contact-info">
        <h1>contact-info</h1>
        <p class="phone-number">
          <i class="fas fa-phone"></i>
          <span> +91 8924879117</span>
        </p>
        <p class="email">
          <i class="fas fa-envelope"></i>
          <span> contact@helpinghutngo.in</span>
        </p>
        <p class="location">
          <i class="fas fa-map-marker-alt"></i>
          <span>
            Plot No.: 147 A, Street No. 5, D-Block, Bharat Vihar, Kakrola,
            Dwarka, Delhi - 110078
          </span>
        </p>
      </div>

      <div class="quick-links">
        <h1>quick-links</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/">Works</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div class="newsletter">
        <h1>newsletter</h1>
        <p>Subscribe for latest updates</p>
        <input type="search" id="search-box" placeholder="search here..." />
        <button class="btn">subscribe</button>
      </div>
    </section>
  );
}
export default Footer;
