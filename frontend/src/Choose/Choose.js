import React from 'react';
import './Choose.css';

const Choose = () => {
  return (
    <div className="choose-container">
      <h1 className="choose-heading">Why Choose Us</h1>
      <div className="cards-container">
        <div className="card">
          <i className="card-icon fas fa-trophy"></i>
          <h3 className="card-title">Personalised <br /> Mentorship</h3>
          <p className="card-description"> Join Skillstock for
            personalized mentorship
            from experienced traders,
            helping you accelerate
            your learning curve and
            achieve trading success
            faster.</p>
        </div>
        <div className="card">
          <i className="card-icon fas fa-cogs"></i>
          <h3 className="card-title">Wide Range Of <br /> Resources</h3>
          <p className="card-description"> With our experienced
            mentors and wide range
            of educational resources,
            you will gain the skills and
            knowledge you need to
            succeed in the market
            and achieve you
            financial goal.</p>
        </div>
        <div className="card">
          <i className="fas fa-users card-icon"></i>

          <h3 className="card-title">Supportive<br /> Community <br /> Of Traders</h3>
          <p className="card-description"> By joining Skillstock, you
            will become a part of
            traders who are all
            working towards the
            same goal : Achieving
            trading success and
            financial independence..</p>
        </div>
        <div className="card">
          <i className="fas fa-user-cog card-icon"></i>
          <h3 className="card-title">Valuable Insights <br /> And Guidance</h3>
          <p className="card-description">Our mentors have a
            proven record of success
            in the market and can
            provide valuable insights
            and guidance to help you
            improve your trading
            skills and achieve your
            financial goals.</p>
        </div>
      </div>
    </div>
  );
}

export default Choose;
