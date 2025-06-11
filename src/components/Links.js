function Links() {
  const links = [
    { href: "#experience", heading: "Professional Experience" },
    { href: "#certifications", heading: "Certifications" },
    { href: "#skills", heading: "Skills" },
    { href: "#projects", heading: "Projects" },
    { href: "#education", heading: "Education" },
    { href: "#contacts", heading: "Contact Me" },
  ];

  return (
    <nav className="navbar navbar-expand-lg rounded px-4 py-3">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav d-flex flex-wrap gap-4">
          {links.map((link, index) => (
            <li key={index} className="nav-item" style={{}}>
              <a
                href={link.href}
                className="nav-link fw-bold px-3 py-2"
                style={{
                  borderRadius: "8px",
                  transition: "all 0.3s ease-in-out",
                  color: "#00246B"
                }}
              >
                {link.heading}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Links;