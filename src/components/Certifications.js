function Certifications() {
  return (
    <div
      className="row mx-5 my-5 px-5 py-5 rounded"
      id="certifications"
      style={{ height: "450px" }}
    >
      <div className="col py-3">
        <img
          src={`${process.env.PUBLIC_URL}/images/cert3.jpg`}
          alt="Python Full Stack Certificate"
          height="300px"
          width="430px"
          style={{ borderRadius: "5%" }}
        />
      </div>
      <div className="col">
        <h3 className="my-3">Certifications</h3>
        <div style={{color:"black"}}>
          {" "}
          <h6>Python Full Stack Development</h6>
          <i className="mb-5">01/2023 - 04-2023</i>
          <div className="my-3">
            <p>Programming Languages - Python</p>
            <p>Frond-End Technologies - HTML, CSS, BOOTSTRAP</p>
            <p>Frameworks - Django</p>
            <p>DataBase - MYSQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Certifications;
