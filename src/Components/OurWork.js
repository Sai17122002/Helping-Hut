import Udaann from "../image/Udaann.jpg";
import beggerTransformation1 from "../image/beggerTransformation1.jpg";
import beggerTransformation2 from "../image/beggerTransformation2.jpg";
import cc1 from "../image/char2.jpg";
import cc2 from "../image/char3.jpg";

const OurWork = () => {
  return (
    <>
      <section id="ourworks" class="ourworks">
        <h1 class="heading">
          <span>Our Works</span>
        </h1>
      </section>
      <div class="boxes">
        <div class="udaan-street-school">
          <img src={Udaann} alt="Udaannn" width="100%" height="400px" />
          <h1>
            <span>UDAAN STREET SCHOOL</span>
          </h1>
          <p class="boxes-heading">
            <span>
              Every child should have the opportunity to recieve a quality
              education
            </span>
          </p>
          <p class="boxes-maincontent">
            <span>
              Knowledge is power, it's the greatest gift you can give to
              someone. You can uplift someone by helping them with money
            </span>
          </p>
          <a class="btn">read more</a>
        </div>
        <div class="beggar-transformation">
          <img
            src={beggerTransformation1}
            alt="beggerTransformation"
            width="45%"
            height="400px"
          />
          <img
            src={beggerTransformation2}
            alt="beggerTransformation"
            width="45%"
            height="400px"
          />
          <h1>
            <span>Begger transformation</span>
          </h1>
          <p class="boxes-heading">
            <span>HELPING HUT helped a beggar from Dwarka</span>
          </p>
          <p class="boxes-maincontent">
            <span>
              Helping Hut helped a beggar from Dwarka ,who begged for years to
              survive , by providing him with a sewing machine so
            </span>
          </p>
          <a class="btn">read more</a>
        </div>
        <div class="charity-carnival">
          <img src={cc1} alt="charityCarnival" width="45%" height="400px" />

          <img src={cc2} alt="charityCarnival" width="45%" height="400px" />

          <h1>
            <span>CHARITY CARNIVAL</span>
          </h1>
          <p class="boxes-heading">
            <span>
              Helping Hut cordially invites you to join our CHARITY CARNIVAL
            </span>
          </p>
          <p class="boxes-maincontent">
            <span>
              Helping Hut cordially invites you to join our CHARITY CARNIVAL
              Sponsored by Silizium-Electronics society of Deen
            </span>
          </p>
          <a class="btn">read more</a>
        </div>
      </div>
    </>
  );
};

export default OurWork;
