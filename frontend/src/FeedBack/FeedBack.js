import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './FeedBack.css'; // Import the updated CSS file

function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState(''); // State to track submission status
  const [messageVisible, setMessageVisible] = useState(false); // State to control message visibility

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      country,
      query: feedback, // Renaming feedback to query as per your API
    };

    try {
      const response = await axios.post('https://backend-liart-five-11.vercel.app/api/queries', formData);
      console.log('Data submitted successfully:', response.data);
      setStatus('success'); // Update status on success
      setMessageVisible(true); // Show the success message

      // Reset the form fields after submission
      setName('');
      setEmail('');
      setPhone('');
      setCountry('');
      setFeedback('');

      // Hide the message after 1 second
      setTimeout(() => setMessageVisible(false), 1000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setStatus('error'); // Update status on error
      setMessageVisible(true); // Show the error message

      // Hide the message after 1 second
      setTimeout(() => setMessageVisible(false), 1000);
    }
  };

  return (
    <div className="feedback-form">
      <h2>Fill the form to submit your Query</h2>
      <p>You have a question, write to us.</p>

      <form onSubmit={handleSubmit}>
        {/* Grouping two inputs in a single div */}
        <div className="flex-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Carter"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
            />
          </div>
        </div>

        <div className="flex-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(123) 456-7890"
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country name"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="feedback">Additional Query</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="If you have any query, please type it in here..."
          />
        </div>

        <button type="submit">Submit feedback</button>
      </form>

      {/* Display success or error message */}
      {messageVisible && status === 'success' && <p className="success-message">Done!</p>}
      {messageVisible && status === 'error' && <p className="error-message">There was an error submitting the form.</p>}
    </div>
  );
}

export default Feedback;
