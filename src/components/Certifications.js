function Certifications() {
  return (
    <div
      className="row mx-3 mx-md-5 my-5 px-3 px-md-5 py-5 rounded"
      id="certifications"
      style={{ backgroundColor: "#f8f9fa" }} // Optional for contrast
    >
     <h3 className="my-3 text-md-start text-center">Internship</h3>
      <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
        <img
          src={`${process.env.PUBLIC_URL}/images/cert3.jpg`}
          alt="Python Full Stack Certificate"
          className="img-fluid"
          style={{ borderRadius: "5%", maxHeight: "300px", objectFit: "cover" }}
        />
      </div>

      <div className="col-12 col-md-6">

        <div style={{ color: "black" }}>
          <h6 className="text-md-start text-center">Python Full Stack Development</h6>
          <i className="d-block mb-3 text-md-start text-center">Inmakes Infotech Pvt.ltd - 01/2023 - 04/2023</i>
          <div className="my-3 text-md-start text-center">
            <p>Programming Languages – Python</p>
            <p>Front-End Technologies – HTML, CSS, Bootstrap</p>
            <p>Framework – Django</p>
            <p>Database – MySQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
