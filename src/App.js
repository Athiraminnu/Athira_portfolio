import Certifications from "./components/Certifications";
import Contacts from "./components/Contacts";
import Education from "./components/Education";
import Links from "./components/Links";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Projects from "./components/Projects";
import SkillSets from "./components/SkillSets";
import Footer from "./components/Footer";
function App() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/AthiraResume.pdf"; // Replace with your file path
    link.download = "Athira Resume.pdf"; // Replace with the desired file name
    link.click();
  };

  const backgroundStyle = {
    minHeight: '100vh',
    backgroundColor: "#FFFFFFFF",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    color: '#00246B',
    padding: '2rem',
  };
  


  return (
    <div className="App position-relative" style={backgroundStyle}>
      <Links />
      <div
        className="row mx-5 rounded px-2"
        style={{ height: "500px",  
           }}
      >
        <div
          className="d-flex gap-3 align-items-center px-5"
          style={{ color: "black" }}
        >
          <img
            src="/images/me.jpg"
            alt="my"
            style={{
              borderRadius: "15px",
              width: "110px",
              height: "150px",
              objectFit: "cover",
            }}
          />

          <div style={{ flex: 1 }}>
            <h1
              className="mb-1"
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                textAlign: "left",
                margin: 0,
                color: "#00246B",
              }}
            >
              ATHIRA A
            </h1>
            <p
              style={{
                marginTop: "10px",
                marginBottom: 0,
                textAlign: "justify",
                fontSize: "16px",
                width: "520px",
                color: "#000000FF",
              }}
            >
              Motivated and detail-oriented Python Full Stack Developer with experience in Django, React, and MySQL. Passionate about building scalable web applications and eager to apply problem-solving and technical skills to innovative projects.
            </p>
          </div>
          <div><br /><br />
            <button
              onClick={handleDownload}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "25px",
                marginRight: "400px",
              }}
            >
              Resume
            </button>
          </div>
        </div>
      </div>
      <Contacts />
      <ProfessionalExperience />
      <Certifications />
      <Projects />
      <SkillSets />
      <Education />
      <Footer />
    </div>
  );
}
export default App;
