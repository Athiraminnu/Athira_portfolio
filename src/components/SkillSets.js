import { useState } from "react";

function SkillSets() {
  const images = [
    { src: `${process.env.PUBLIC_URL}/images/Python-logo-notext.svg.png`, alt: "Python logo" },
    { src: `${process.env.PUBLIC_URL}/images/HTML5_logo_and_wordmark.svg.png`, alt: "HTML logo" },
    { src: `${process.env.PUBLIC_URL}/images/CSS.png`, alt: "CSS logo" },
    { src: `${process.env.PUBLIC_URL}/images/Bootstrap_logo.svg.png`, alt: "Bootstrap logo" },
    { src: `${process.env.PUBLIC_URL}/images/MySQL_logo.svg.png`, alt: "MySQL logo" },
    { src: `${process.env.PUBLIC_URL}/images/Django_logo.svg.png`, alt: "Django logo" },
    { src: `${process.env.PUBLIC_URL}/images/React_Logo_SVG.svg.png`, alt: "Logo of React JS" },
    { src: `${process.env.PUBLIC_URL}/images/ISO_C++_Logo.svg.png`, alt: "C++ logo" },
  ];

  const [hoverImage, setHoverImage] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverImage(index);
  };

  const handleMouseLeave = () => {
    setHoverImage(null);
  };

  return (
    <div className="container-fluid my-5 py-5" id="skills">
      <h3 className="mx-5 px-5 mb-5 text-center text-md-start">Skills</h3>
      <div className="row justify-content-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mb-4"
          >
            <div className="d-flex flex-column align-items-center">
              <img
                src={image.src}
                className="card-img-top"
                alt={image.alt}
                style={{
                  maxWidth: "5rem",
                  transition: "transform 0.3s ease, filter 0.3s ease",
                  transform: hoverImage === index ? "scale(1.2)" : "scale(1)",
                  filter: hoverImage === index ? "brightness(0.8)" : "brightness(1)",
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillSets;