function ProfessionalExperience() {
  return (
    <div
      className="row mx-3 mx-md-5 my-4 px-3 px-md-5 py-5 rounded"
      id="experience"
      style={{
        border: "2px solid #1a1b1c",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div className="col-12">
        <h3 className="my-1 mb-4 text-center text-md-start">Professional Experience</h3>
        <div style={{ color: "black" }}>
          <h6 className="fw-bold text-center text-md-start">GRADUATE APPRENTICE TRAINEE</h6>
          <i className="d-block text-center text-md-start">APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY | THIRUVANANTHAPURAM</i>
          <p className="text-md-end text-center fw-semibold">11/2023 – 11/2024</p>
          <p className="text-justify">
            In my recent role, I actively contributed to the development of an asset management application. I played a key role in testing and resolving bugs across both the front-end and back-end components of the system. The application was developed using React for the front-end and Java Spring Boot for the back-end, ensuring a robust and efficient system architecture.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalExperience;