import { useState } from "react";

function Contacts() {
  const contactInfo = [
    { icon: "fa-solid fa-location-dot", alt: "Thiruvananthapuram" }, // No link
    { icon: "fa-solid fa-phone", alt: "6282794146", href: "tel:6282794146" },
    { icon: "fa-solid fa-envelope", alt: "athiraminnu1999@gmail.com", href: "mailto:athiraminnu1999@gmail.com" },
    { icon: "fa-brands fa-linkedin-in", alt: "www.linkedin.com/in/athira1999", href: "https://www.linkedin.com/in/athira1999" },
    { icon: "fa-brands fa-github", alt: "https://github.com/Athiraminnu", href: "https://github.com/Athiraminnu" },
  ];  
  
  const [hoverInfo, setHoverInfo] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverInfo(index);
  };
  const handleMouseLeave = () => {
    setHoverInfo(null);
  };

  return (
    <div className="position-fixed" style={{ top: "50%", left: "80%", transform: "translateY(-50%)" }}>
      {contactInfo.map((info, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            marginBottom: "1rem",
            transition: "transform 0.3s ease, filter 0.3s ease",
            transform: hoverInfo === index ? "scale(1.1)" : "scale(1)",
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <p
            className="mb-0 text-end"
            style={{
              marginRight: "1rem",
              visibility: hoverInfo === index ? "visible" : "hidden",
              opacity: hoverInfo === index ? 1 : 0,
              transition: "opacity 0.3s ease",
              whiteSpace: "nowrap", // Prevents text wrapping
            }}
          >
            <a
              style={{
                fontSize: "1rem",
                color: "black",
                textDecoration: "none",
              }}
              href={info.href} // Fixed href, should be the actual URL
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Ensures security for external links
            >
              {info.alt}
            </a>
          </p>
          <i
            className={info.icon}
            style={{
              alignItems: "center",
              fontSize: "1rem", // Adjusted size for better visibility
              textAlign: "center",
              lineHeight: "1rem", 
              right: "0rem",// Matches icon size for proper alignment
            }}
          ></i>
        </div>
      ))}
    </div>
  );
}

export default Contacts;
