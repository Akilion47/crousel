import React, { useState, useEffect } from "react";
import "./Carousel.css";

const destinations = [
  {
    country: "FRANCE",
    title: "EIFFEL TOWER",
    description:
      "Parisian Elegance, Timeless Wonder: Eiffel Tower – A Monumental Icon of Love and Romance.",
    image:
      "/eiffel.jpeg",
    rating: 5,
  },
  {
    country: "DUBAI",
    title: "BURJ KHALIFA",
    description:
      "Touching the Sky: Burj Khalifa – The Tower of Dreams and Architectural Wonder.",
    image:
      "/imgBurj.jpeg",
    rating: 5,
  },
  {
    country: "AUSTRALIA",
    title: "SYDNEY OPERA HOUSE",
    description:
      "Iconic Architecture, Artistic Brilliance: Sydney Opera House – Where Dreams Take Center Stage.",
    image:"/aus.jpeg",
    rating: 5,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % destinations.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-4 ">
        Popular Destination
      </h1>
     

      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {destinations.map((place, index) => (
          <div className="carousel-card" key={index}>
            <div className="card-content">
              <img
                src={place.image}
                alt={place.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-5 text-left">
                <p className="text-blue-400 font-semibold uppercase">
                  {place.country}
                </p>
                <h3 className="text-xl font-bold text-gray-800">{place.title}</h3>
                <p className="text-gray-600 mt-2">{place.description}</p>
                <div className="rating">
                  {"★".repeat(place.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="carousel-nav-btn carousel-nav-prev"
        onClick={goToPrevious}
      >
        &#10094;
      </div>
      <div
        className="carousel-nav-btn carousel-nav-next"
        onClick={goToNext}
      >
        &#10095;
      </div>

      <div className="carousel-dots">
        {destinations.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;




