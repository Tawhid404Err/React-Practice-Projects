import Logo from "../assets/brand_logo.png";

function Navbar() {
  return (
    <div className="nav_Wrapper">
      <div className="container uni_box">
        <div className="web_logo">
          <img src={Logo} alt="web_logo" />
        </div>

        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">LOCATION</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>

        <button>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
