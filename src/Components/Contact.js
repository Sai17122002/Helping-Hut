import "./Contact.css";
import Instagram from "../image/facebook.svg";
import Facebook from "../image/facebook.svg";
import Twitter from "../image/twitter.svg";

function Contact() {
  return (
    <>
      <div className="contact-parent">
        <h1>Connect With Us</h1>
        <div className="contact-about-project">
          <div className="about-project">
            <h2>Let's Talk</h2>
            <p>
              To request a quote or want to meet up for coffee, contact us
              directly or fill out the form and we will get back to you promptly
            </p>
            <form>
              <label>Your Name</label>
              <input className="name-input" />
              <div className="email-phone">
                <div className="email">
                  <label>Your Email</label>
                  <input />
                </div>
                <div className="phone">
                  <label>Your Phone Number</label>
                  <input />
                </div>
              </div>
              <label>Your Message</label>
              <textarea class="message-input" rows="10" cols="70"></textarea>
            </form>
          </div>
          <div className="contact-address-call-policy">
            <div className="address">
              <h2>Address</h2>
              <p>
                Plot No.: 147 A, Street No. 5, D-Block, Bharat Vihar, Kakrola,
                Dwarka, Delhi - 110078
              </p>
            </div>
            <div className="call">
              <h2>Call us on</h2>
              <p>+91 8924879117 contact@helpinghutngo.in</p>
            </div>
            <div className="contact-social-media">
              <img src={Instagram} width="40" height="40" />
              <img src={Twitter} width="40" height="40" />
              <img src={Facebook} width="40" height="40" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
