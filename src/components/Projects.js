import React, { useState } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const truncateDescription = (text, wordLimit = 17) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + " ......"
      : text;
  };

  const handleShowMore = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "Care Connect",
      date: "02/2025 – Present",
      description:
        "Developing a doctor appointment booking system using Django (backend) and React.js (frontend). Implemented user authentication and role-based access for patients and doctors. Integrated RESTful APIs for seamless communication between frontend and backend. Optimized database queries in MySQL to ensure fast scheduling and retrieval of appointments.",
      link: "https://github.com/Athiraminnu/Care-Connect.git",
    },
    {
      title: "Borrow Shelf",
      date: "10/2024 – 02/2025",
      description:
        "Built a book rental platform using Django and MySQL, allowing users to rent books for a specified period. Developed an intuitive UI with HTML, CSS, and Bootstrap for easy navigation.",
      link: "https://github.com/Athiraminnu/Book_Rental.git",
    },
    {
      title: "SportNest",
      date: "03/2023 – 04/2023",
      description:
        "Developed a fully functional e-commerce website using Django and MySQL. Implemented user authentication, product management, and cart functionality for seamless shopping.",
      link: "https://github.com/Athiraminnu/e-commerce.git",
    },
    {
      title: "A System for Printing Braille Letters from Speech and Text Image",
      date: "01/2022 – 04/2022",
      description:
        "Developed an assistive communication system for deafblind individuals, converting speech and text images into Braille letters. Implemented speech-to-text conversion to process voice inputs and OCR to extract text from images. System was built using Python.",
      link: "",
    },
  ];

  return (
    <div
      className="row mx-5 my-5 px-5 py-5 rounded"
      id="projects"
      style={{ border: "2px solid #010000FF" }}
    >
      <h3 className="mb-5">My Works</h3>
      <div className="d-flex justify-content-around flex-wrap w-100">
        {projects.map((project, index) => (
          <div className="col-md-3 d-flex justify-content-center" key={index}>
            <div
              className="card d-flex flex-column"
              style={{
                width: "17rem",
                textAlign: "justify",
                border: "2px solid #1a1b1c",
                boxShadow: "2px 2px grey",
                minHeight: "200px",
              }}
            >
              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{project.title}</h6>
                <p className="card-subtitle mb-2 text-muted">{project.date}</p>
                <p className="card-text flex-grow-1">
                  {truncateDescription(project.description)}
                  <button
                    className="btn btn-link p-0"
                    onClick={() => handleShowMore(project)}
                    style={{ textDecoration: "none", color: "black",  }}
                  >
                    More
                  </button>
                </p>
                {project.description.split(" ").length > 17}
                <a
                  href={project.link}
                  className="btn btn-outline-dark"
                  role="button"
                  aria-pressed="true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bootstrap Modal for Showing Full Details */}
      {selectedProject && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProject.title}</h5>
              </div>
              <div className="modal-body">
                <p className="text-muted">{selectedProject.date}</p>
                <p>{selectedProject.description}</p>
              </div>
              <div className="modal-footer">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    className="btn btn-outline-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                )}
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
