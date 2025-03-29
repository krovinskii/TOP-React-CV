import logo from "./assets/logo.svg";
import "./styles/header.css";
const Header = () => {
  return (
    <div className="header-container">
      <img src={logo}></img>
      <h1>Basic CV</h1>
    </div>
  );
};
export default Header;
