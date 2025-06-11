function ProfessionalExperience() {
  return (
    <div
      className="row mx-5 my-5 px-5 py-2 rounded"
      id="experience"
      style={{
        height: "400px",
        border: "2px solid #1a1b1c",
      }}
    >
      <div>
        <h3 className="my-4">Professional Experience</h3>
        <div style={{ color: "black" }}>
          {" "}
          <h6>GRADUATE APPRENTICE TRAINEE</h6>{" "}
          <i>APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY | THIRUVANANTHAPURAM</i>
          <p className="text-end">11/2023 – 11/2024</p>
          <p>
            In my recent role, I actively contributed to the development of an
            asset management application. I played a key role in testing and
            resolving bugs across both the front-end and back-end components of
            the system. The application was developed using React for the
            front-end and Java Spring Boot for the back-end, ensuring a robust
            and efficient system architecture.
          </p>
        </div>
      </div>
    </div>
  );
}
export default ProfessionalExperience;
