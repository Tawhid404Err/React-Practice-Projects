import Flipkart from "../assets/flipkart.png";
import Amazon from "../assets/amazon.png";
import Shoes from "../assets/shoe_image.png";

function Hero() {
  return (
    <div className="hero_wrapper uni_box">
      <div className="hero_contents">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="button_container">
          <button>Shop Now</button>
          <button>Category</button>
        </div>

        <div>
          <p className="also">Also Available On</p>

          <div className="partners">
            <span>
              <img src={Flipkart} alt="Flipkart" />
            </span>
            <span>
              <img src={Amazon} alt="Amazon" />
            </span>
          </div>
        </div>
      </div>

      <div className="hero_image">
        <img src={Shoes} alt="Hero Image" />
      </div>
    </div>
  );
}

export default Hero;
