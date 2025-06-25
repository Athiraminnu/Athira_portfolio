import { useState, useEffect } from "react";

function Contacts() {
  const contactInfo = [
    { icon: "fa-solid fa-location-dot", alt: "Thiruvananthapuram" },
    { icon: "fa-solid fa-phone", alt: "6282794146", href: "tel:6282794146" },
    {
      icon: "fa-solid fa-envelope",
      alt: "athiraa1018@gmail.com",
      href: "mailto:athiraa1018@gmail.com",
    },
    {
      icon: "fa-brands fa-linkedin-in",
      alt: "www.linkedin.com/in/athira1999",
      href: "https://www.linkedin.com/in/athira1999",
    },
    {
      icon: "fa-brands fa-github",
      alt: "https://github.com/Athiraminnu",
      href: "https://github.com/Athiraminnu",
    },
  ];

  const [hoverInfo, setHoverInfo] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    position: "fixed",
    zIndex: 1000,
    display: "flex",
    flexDirection: isMobile ? "row" : "column",
    justifyContent: isMobile ? "space-around" : "flex-start",
    alignItems: "center",
    flexWrap: isMobile ? "wrap" : "nowrap",
    bottom: isMobile ? 0 : "auto",
    top: isMobile ? "auto" : "50%",
    right: isMobile ? 0 : "2%",
    left: isMobile ? 0 : "auto",
    transform: isMobile ? "none" : "translateY(-50%)",
    backgroundColor: isMobile ? "#f8f9fa" : "transparent",
    padding: isMobile ? "0.7rem 1rem" : 0,
    boxShadow: isMobile ? "0 -2px 5px rgba(0,0,0,0.1)" : "none",
    width: isMobile ? "100%" : "auto",
  };

  const iconStyle = {
    fontSize: "1rem",
    color: "black",
    padding: "0rem",
  };

const labelStyle = (visible) => ({
  marginRight: "0.5rem",
  visibility: visible ? "visible" : "hidden",
  opacity: visible ? 1 : 0,
  transition: "opacity 0.3s ease",
  whiteSpace: "nowrap",
  textAlign: "right",
});

  const linkStyle = {
    fontSize: "0.9rem",
    color: "black",
    textDecoration: "none",
  };

const itemStyle = (hovered) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: isMobile ? "center" : "flex-end",
  marginBottom: isMobile ? "0.5rem" : "1rem",
  marginRight: isMobile ? "1rem" : 0,
  flexDirection: isMobile ? "column" : "row",
  transform: hovered ? "scale(1.1)" : "scale(1)",
  transition: "transform 0.3s ease",
  cursor: "pointer",
  width: isMobile ? "auto" : "100%", // ensures alignment in desktop
});

  return (
    <div style={containerStyle}>
      {contactInfo.map((info, index) => (
        <div
          key={index}
          style={itemStyle(hoverInfo === index)}
          onMouseEnter={() => !isMobile && setHoverInfo(index)}
          onMouseLeave={() => !isMobile && setHoverInfo(null)}
          onClick={() => isMobile && setHoverInfo(index)}
        >
          {!isMobile && (
            <p style={labelStyle(hoverInfo === index)}>
              <a
                href={info.href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                {info.alt}
              </a>
            </p>
          )}
          <a
            href={info.href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <i className={info.icon} style={iconStyle}></i>
          </a>
          {isMobile && hoverInfo === index && (
            <p style={{ fontSize: "0.3rem", textAlign: "center", marginTop: "0.3rem" }}>
                {info.alt}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Contacts;