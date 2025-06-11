function Footer() {
  return (
    <div
      className="row rounded d-flex align-items-center px-5" id="contacts"
      style={{ backgroundColor: "#FDFDFDFF", height: "120px", color: "black" }}
    >
      <div className="col d-flex align-items-center">
        <i className="fas fa-envelope mx-2"></i>
        <span>athiraminnu1999@gmail.com</span>
      </div>

      <div className="col text-center d-flex justify-content-center align-items-center">
        <i className="fas fa-phone mx-2"></i>
        <span>6282794146</span>
      </div>

      <div className="col text-end d-flex justify-content-end align-items-center">
        <i className="fas fa-map-marker-alt mx-2"></i>
        <span>Thiruvananthapuram</span>
      </div>
    </div>
  );
}
export default Footer;
