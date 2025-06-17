import { useState } from "react";

function Links() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#experience", heading: "Professional Experience" },
    { href: "#certifications", heading: "Certifications" },
    { href: "#skills", heading: "Skills" },
    { href: "#projects", heading: "Projects" },
    { href: "#education", heading: "Education" },
    { href: "#contacts", heading: "Contact Me" },
  ];

  return (
    <nav className="navbar navbar-expand-lg rounded px-4 py-3" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-center ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav d-flex flex-wrap gap-2 gap-md-4">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                <a
                  href={link.href}
                  className="nav-link fw-bold px-3 py-2 text-center"
                  style={{
                    borderRadius: "8px",
                    transition: "all 0.3s ease-in-out",
                    color: "#00246B",
                  }}
                >
                  {link.heading}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Links;