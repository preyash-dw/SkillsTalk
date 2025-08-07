
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
      videoSrc: "https://www.youtube.com/embed/xfyjA3w83uE", // Updated YouTube embed link
    },
    {
      title: "Video 2",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/4qRd7-OpTCQ", // Updated YouTube embed link
    },
    {
      title: "Video 3",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/DdmTID3QUyM", // Updated YouTube embed link
    },
    {
      title: "Video 4",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/58eRwxatA6s", // Updated YouTube embed link
    },
    {
      title: "Video 5",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/m8rBt25otAE", // Updated YouTube embed link
    },
    {
      title: "Video 6",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/GuyF2TRogVM", // Updated YouTube embed link
    },
  ];
  
  
  const binaryVideos = [
    {
      title: "Video 1",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/Ju6SHZMrBdA", // Updated YouTube embed link
    },
    {
      title: "Video 2",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/KIFGT3FSPj0", // Updated YouTube embed link
    },
    {
      title: "Video 3",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/Q5tAAuYKTeY", // Updated YouTube embed link
    },
    {
      title: "Video 4",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/WxuK0mguWZQ", // Updated YouTube embed link
    },
    {
      title: "Video 5",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/Sfax2FTdJZU", // Updated YouTube embed link
    },
    {
      title: "Video 6",
      description: "Lorem ipsum dolore magna aliqua.",
      duration: "7 min",
      views: "53K views",
      date: "2 weeks ago",
      videoSrc: "https://www.youtube.com/embed/-XONK_HDlt4", // Updated YouTube embed link
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
