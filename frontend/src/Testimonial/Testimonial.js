import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import { MdNavigateNext ,MdNavigateBefore} from "react-icons/md";

const testimonials = [
  {
    id: 1,
    name: "Hannah Schmitt",
    role: "USA",
    feedback:
      "The trading course was incredibly insightful! The personalized sessions made it easy for me to grasp complex concepts, and the mentors were always there to clarify doubts. Highly recommended!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPIYoh4hZs0aNfoHV2_ICiEMvWc4im06Y33Q&s",
  },
  {
    id: 2,
    name: "Michael Adams",
    role: "Hong Kong",
    feedback:
      "I came in as a complete beginner, and now I can confidently analyze the markets and make informed decisions. The live trading examples were a game-changer!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&s",
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Morroco",
    feedback:
      "I loved how structured and easy-to-follow the course was. The one-on-one guidance really helped me refine my trading strategies and avoid common mistakes.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQUXqMrzrmkxd3QpxGL5bzgxELsztrL1AgQ&s",
  },
  {
    id: 4,
    name: "Lucas White",
    role: "United Kingdom",
    feedback:
      "This course exceeded my expectations! The instructors were knowledgeable, and the interactive sessions gave me real-world insights into trading. Great value for money.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9Vy0XUGZrvGS3IVpOYsFDKzSWxBSfSU0RQ&s",
  },
  {
    id: 5,
    name: "Emily Brown",
    role: "Germany",
    feedback:
      "The trading strategies taught in this course are top-notch. I feel much more confident now about managing my investments. Thanks for the personalized attention!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-CP7ChC_RjSlZcIC59_FH4KBl41Enn74Zw&s",
  },
  {
    id: 6,
    name: "James Green",
    role: "Brazil",
    feedback:
      "The practical approach of this course is what sets it apart. The instructors simplified everything, making it possible for me to apply what I learned immediately.",
    image: "https://isbscience.org/wp-content/uploads/Andrew-Magis.png",
  },
  {
    id: 7,
    name: "Olivia Harris",
    role: "France",
    feedback:
      "The personalized mentorship was amazing. They really took the time to understand my goals and tailored the lessons accordingly. I'm now confidently trading part-time!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMfxOqtAmPCrXsItFk75hDd4l1KnNp-bPObQ&s",
  },
  {
    id: 8,
    name: "William Scott",
    role: "Egypt",
    feedback:
      "I appreciated the detailed step-by-step approach. The live trading demonstrations and strategy-building workshops made the learning experience very engaging.",
    image: "https://i0.wp.com/neon.fund/wp-content/uploads/2024/10/Vibhanshu_Founder_Alltius.png?fit=1920%2C1080&ssl=1",
  },
  {
    id: 9,
    name: "Grace Johnson",
    role: "Finland",
    feedback:
      "This is hands down the best trading course I've taken! The combination of theory, practical examples, and expert guidance was perfect. A big thumbs up!",
    image: "https://img.freepik.com/free-photo/portrait-hapy-young-smart-man-glasses-white-wall_231208-12206.jpg",
  },
  {
    id: 10,
    name: "Ethan Cooper",
    role: "Seoul",
    feedback:
      "The course helped me understand trading concepts I'd been struggling with for years. The personalized coaching sessions were incredibly valuable. I can’t thank the team enough!",
    image: "data:image/jpeg;base64,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",
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
