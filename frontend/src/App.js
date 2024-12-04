
import './App.css';
import Navbar from './Navbar/Navbar';
import Main from "./Main/Main"
import Choose from './Choose/Choose';
import Offer from './Offers/Offer';
import Footer from './Footer/Footer';
import Feedback from './FeedBack/FeedBack';
import Testimonial from './Testimonial/Testimonial';

import Resources from './Resources/Resources';

function App() {
  const optionalVideos = [
    {
      title: "Video 1",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/-aJiVo6rDAc", // YouTube embed link
    },
    {
      title: "Video 2",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/-aJiVo6rDAc", // YouTube embed link
    },
    {
      title: "Video 3",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/-aJiVo6rDAc", // YouTube embed link
    },
    {
      title: "Video 4",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/-aJiVo6rDAc", // YouTube embed link
    },
    {
      title: "Video 5",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/-aJiVo6rDAc", // YouTube embed link
    },
    {
      title: "Video 6",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/-aJiVo6rDAc", // YouTube embed link
    },
  ];
  
  const binaryVideos = [
    {
      title: "Video 1",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/-aJiVo6rDAc", // YouTube embed link
    },
    {
      title: "Video 2",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/-aJiVo6rDAc", // YouTube embed link
    },
    {
      title: "Video 3",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/-aJiVo6rDAc", // YouTube embed link
    },
    {
      title: "Video 4",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/-aJiVo6rDAc", // YouTube embed link
    },
    {
      title: "Video 5",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/-aJiVo6rDAc", // YouTube embed link
    },
    {
      title: "Video 6",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/-aJiVo6rDAc", // YouTube embed link
    },
  ];
  
  
  return (
    <div className="App">
    {/* Navbar */}
    <Navbar />

    <section id="main-section">
      <Main />
      {/* <Mobile/> */}
    </section>

 

    <section id="choose-section">
      <Choose />
    </section>
    <section id="trading-section">
      <Resources
        optionalVideos={optionalVideos}
        binaryVideos={binaryVideos}
      />
    </section>

    <section id="offer-section" >
      <Offer />
    </section>
    <section id="testimonial-section">
      <Testimonial/>
    </section>
 
    <section id="feedback-section">
      <Feedback />
    </section>

   

    <section id="footer-section" >
  <Footer />
</section>  

  </div>
  );
}

export default App;
