import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import { MdNavigateNext ,MdNavigateBefore} from "react-icons/md";

const testimonials = [
  {
    id: 1,
    name: "Hannah Schmitt",
    role: "Lead designer",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPIYoh4hZs0aNfoHV2_ICiEMvWc4im06Y33Q&s",
  },
  {
    id: 2,
    name: "Michael Adams",
    role: "Senior developer",
    feedback:
      "Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&s",
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Marketing specialist",
    feedback:
      "Nunc aliquet risus quis tortor. Sit amet aliquet tortor consectetur et. Duis vehicula massa vel metus.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQUXqMrzrmkxd3QpxGL5bzgxELsztrL1AgQ&s",
  },
  {
    id: 4,
    name: "Lucas White",
    role: "UX designer",
    feedback:
      "Faucibus venenatis felis id augue sit cursus pellentesque enim. Vestibulum dapibus nibh orci lectus posuere.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9Vy0XUGZrvGS3IVpOYsFDKzSWxBSfSU0RQ&s",
  },
  {
    id: 5,
    name: "Emily Brown",
    role: "Project manager",
    feedback:
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Sed fringilla mauris sit amet nibh.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-CP7ChC_RjSlZcIC59_FH4KBl41Enn74Zw&s",
  },
  {
    id: 6,
    name: "James Green",
    role: "Data scientist",
    feedback:
      "Pellentesque habitant morbi tristique senectus et netus. Nullam sagittis, nibh eu interdum commodo.",
    image: "https://isbscience.org/wp-content/uploads/Andrew-Magis.png",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3); // Default for desktop

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setCardsPerView(2); // Mobile
      } else if (window.innerWidth <= 768) {
        setCardsPerView(3); // Tablet
      } else {
        setCardsPerView(4); // Desktop
      }
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.ceil(testimonials.length / cardsPerView) - 1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * cardsPerView,
    currentIndex * cardsPerView + cardsPerView
  );

  return (
    <div className="carousel-container">
      <h2>What Our Clients Say About Us</h2>
      <div className="carousel">
        {visibleTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="avatar"
            />
            <h3>{testimonial.name}</h3>
            <p className="role">{testimonial.role}</p>
            <p className="feedback">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button className="nav-button" onClick={handlePrev} disabled={currentIndex === 0}>
          <MdNavigateBefore/>
        </button>
        <div className="indicator-container">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
            ></span>
          ))}
        </div>
        <button
          className="nav-button"
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
        >
          <MdNavigateNext/>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
