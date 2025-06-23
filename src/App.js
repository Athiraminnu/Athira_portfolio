import Certifications from "./components/Certifications";
import Contacts from "./components/Contacts";
import Education from "./components/Education";
import Links from "./components/Links";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Projects from "./components/Projects";
import SkillSets from "./components/SkillSets";
import './App.css';

function App() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/AthiraResume.pdf";
    link.download = "Athira Resume.pdf";
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

      <div className="container my-5 py-5">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-12 col-md-3 mb-3 mb-md-0 d-flex justify-content-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/me.jpg`}
              alt="my"
              style={{
                borderRadius: "15px",
                width: "100%",
                maxWidth: "150px",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="col-12 col-md-6">
            <h1
              className="mb-1"
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "#00246B",
              }}
            >
              ATHIRA A
            </h1>
            <p
              style={{
                marginTop: "10px",
                marginBottom: 0,
                fontSize: "16px",
                color: "#000000FF",
                textAlign: "justify",
              }}
            >
Motivated and detail-oriented aspiring React.js Developer with a strong foundation in web development and a passion for building responsive, user-friendly applications. Skilled in Python, Django, MySQL, and React.js, with a solid understanding of RESTful APIs and component-based architecture. Eager to apply problem-solving and technical skills to real-world projects in a collaborative environment.            </p>
          </div>

          {/* Button Section */}
          <div className="col-12 col-md-3 mt-3 mt-md-0 d-flex justify-content-center justify-content-md-end">
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

    </div>
  );
}

export default App;
