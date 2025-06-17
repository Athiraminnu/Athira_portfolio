function Education() {
  return (
    <div
      className="row mx-3 mx-md-5 my-5 px-4 px-md-5 py-5 rounded"
      id="education"
      style={{ border: "2px solid #1a1b1c" }}
    >
      <h3 className="my-3 text-center text-md-start">Education</h3>
      <div className="row">
        <div className="col-md-6">
          <div style={{ color: "black" }}>
            <div className="my-3 text-center text-md-start">
              <h6>B. TECH IN INFORMATION TECHNOLOGY</h6>
              <i>
                LBS INSTITUTE OF TECHNOLOGY FOR WOMEN | THIRUVANANTHAPURAM | INDIA
              </i>
              <p className="text-end">2018 – 2022</p>
            </div>
            <div className="my-3 text-center text-md-start">
              <h6>INTERMEDIATE</h6>
              <i>
                ST. THOMAS HIGHER SECONDARY SCHOOL | THIRUVANANTHAPURAM | INDIA
              </i>
              <p className="text-end">2018</p>
            </div>
            <div className="my-3 text-center text-md-start">
              <h6>METRICULATION</h6>
              <i>
                MARY NILAYAM SENIOR SECONDARY SCHOOL | THIRUVANANTHAPURAM | INDIA
              </i>
              <p className="text-end">2016</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 text-center">
          <img
            className="img-fluid rounded"
            src={`${process.env.PUBLIC_URL}/images/grad3.jpg`}
            alt="education"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Education;