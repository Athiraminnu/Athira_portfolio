function Education() {
  return (
    <div
      className="row mx-5 my-5 px-5 py-5 rounded"
      id="education"
      style={{ height: "550px", border: "2px solid #1a1b1c" }}
    >
      <div className="col">
        <h3 className="my-4">Education</h3>
        <div style={{ color: "black" }}>
          {" "}
          <div className="mx-1 my-1">
            <h6>B. TECH IN INFORMATION TECHNOLOGY</h6>
            <i>
              LBS INSTITUTE OF TECHNOLOGY FOR WOMEN | THIRUVANANTHAPURAM | INDIA
            </i>
            <p className="text-end">2018 – 2022</p>
          </div>
          <div className="mx-1 my-1">
            <h6>INTERMEDIATE</h6>
            <i>
              ST. THOMAS HIGHER SECONDARY SCHOOL | THIRUVANANTHAPURAM | INDIA{" "}
            </i>
            <p className="text-end">2018 </p>
          </div>
          <div className="mx-1 my-1">
            <h6>METRICULATION</h6>
            <i>
              MARY NILAYAM SENIOR SECONDARY SCHOOL | THIRUVANANTHAPURAM | INDIA{" "}
            </i>
            <p className="text-end">2016</p>
          </div>
        </div>
      </div>
      <div className="col end-0  rounded">
        <img
          className="mx-5 px-5"
          src="/images/grad3.jpg"
          alt="education"
          height="320px"
        />
      </div>
    </div>
  );
}
export default Education;
