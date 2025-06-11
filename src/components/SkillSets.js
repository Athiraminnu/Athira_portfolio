import { useState } from "react";

function SkillSets() {
  const images = [
    { src: "/images/Python-logo-notext.svg.png", alt: "Python logo" },
    { src: "/images/HTML5_logo_and_wordmark.svg.png", alt: "HTML logo" },
    { src: "/images/CSS.png", alt: "CSS logo" },
    { src: "/images/Bootstrap_logo.svg.png", alt: "Bootstrap logo" },
    { src: "/images/MySQL_logo.svg.png", alt: "MySQL logo" },
    { src: "/images/Django_logo.svg.png", alt: "Django logo" },
    { src: "/images/React_Logo_SVG.svg.png", alt: "Logo of React JS" },
    { src: "/images/ISO_C++_Logo.svg.png", alt: "C++ logo" },
  ];

  const [hoverImage, setHoverImage] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverImage(index);
  };

  const handleMouseLeave = () => {
    setHoverImage(null);
  };

  return (
    <div className="row m-5 py-5 rounded" id="skills" style={{ height: "350px"}}>
      <div className="col  mx-5 rounded align-items-center">
      <h3>Skills</h3>
        <div className="d-flex flex-wrap gap-5 mx-2 my-5 px-3 py-4">
        
          {images.map((image, index) => (
            <div key={index} className="d-flex flex-column">
              <img
                src={image.src}
                className="card-img-top"
                alt={image.alt}
                style={{
                  maxWidth: "5rem",
                  transition: "transform 0.3s ease, filter 0.3s ease",
                  transform: hoverImage === index ? "scale(1.2)" : "scale(1)",
                  filter:
                    hoverImage === index ? "brightness(0.8)" : "brightness(1)",
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillSets;
