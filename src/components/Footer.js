function Footer() {
  return (
    <div
      className="container-fluid py-4 px-3"
      id="contacts"
      style={{ backgroundColor: "#FDFDFDFF", color: "black" }}
    >
      <div className="row text-center text-md-start">
        {/* Email */}
        <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start align-items-center mb-3 mb-md-0">
          <i className="fas fa-envelope mx-2"></i>
          <span>athiraminnu1999@gmail.com</span>
        </div>

        {/* Phone */}
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center mb-3 mb-md-0">
          <i className="fas fa-phone mx-2"></i>
          <span>6282794146</span>
        </div>

        {/* Location */}
        <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
          <i className="fas fa-map-marker-alt mx-2"></i>
          <span>Thiruvananthapuram</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;