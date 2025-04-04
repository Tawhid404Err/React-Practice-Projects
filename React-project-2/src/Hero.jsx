import Button from "./Components/Button/Button";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import Image_contact from "../public/contact_imgae.svg";

const Hero = () => {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <div className="hero_wrapper">
      <div className="hero_heading">
        <h1>CONTACT US</h1>
        <p>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>

      <div className="hero_content_container">
        <div className="hero_input_wrapper">
          <span className="uni_btn">
            <Button
              icon={<MdMessage fontSize="24px" />}
              text="VIA SUPPORT CHAT"
            />
            <Button icon={<IoMdCall fontSize="24px" />} text="VIA CALL" />
          </span>

          <div className="email_board">
            <MdMessage fontSize="24px" /> VIA EMAIL FORM
          </div>

          <form onSubmit={handleSubmit} className="all_input_container">
            <label className="lable_controle" htmlFor="name">
              Name
            </label>
            <input type="text" name="name" />

            <label className="lable_controle" htmlFor="email">
              Email
            </label>
            <input type="email" name="email" />

            <label className="lable_controle" htmlFor="text">
              Text
            </label>
            <textarea className="textarea" name="text" />

            <Button isSubmit={true} text="SUBMIT" />
          </form>
        </div>

        <div className="hero_img">
          <img src={Image_contact} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
