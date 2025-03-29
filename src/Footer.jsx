import "./styles/footer.css";
const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <p>&copy;</p>
      <p>KRIVONSKI {currentYear}</p>
    </div>
  );
};
export default Footer;
