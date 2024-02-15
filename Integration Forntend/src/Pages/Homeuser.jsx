// Home.jsx
import { useState, useEffect } from "react";
import Navbaruser from "./Navbaruser";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  const initialReviews = [
    "I recently Borcelle hired Party Management for my daughter's sweet sixteen, and I couldn't be happier with the experience.",
    "We used Borcelle Events for our company's annual holiday party.",
    "I can't express how impressed I am with Borcelle Events.",
    "Dialam Celebrations made my milestone birthday truly unforgettable! ",
    "LMN Party Planners turned our dream wedding into a reality! Their expertise and dedication were evident from day one.",
  ];

  const [reviews, setReviews] = useState(initialReviews);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [userReview, setUserReview] = useState("");

  const handleUserReview = () => {
    if (userReview.trim() !== "") {
      // Add the new review to the existing reviews
      const updatedReviews = [...reviews, userReview];
      setReviews(updatedReviews);
      // Set the currentReviewIndex to the newly added review
      setCurrentReviewIndex(updatedReviews.length - 1);
      // Clear the user review input
      setUserReview("");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentReviewIndex, reviews.length]);

  return (
    <div className="home">
      <Navbaruser />
      <div className="home__image">
        <img
          src="https://img.freepik.com/premium-photo/party-beach-blurred-people-having-night-beach-party-summer_277041-3814.jpg"
          alt="Beautiful Landscape"
        />
      </div>
      <div className="home__content">
        <div className="image__text">
          <h1>Welcome to Your Website</h1>
          <p>Explore the beauty of our services and offerings.</p>
        </div>
      </div>
      <div className="down">
        <div className="ev">
          <h2>You May Love These Too</h2>
        </div>
        <div className="dw">
          <h2>Experience</h2>
          <p>Discover a world of unique experiences.</p>
        </div>
        <div className="dw">
          <h2>Thorough Planning</h2>
          <p>Begin by defining the purpose and theme of the party.
Create a detailed checklist outlining tasks, timelines, and responsibilities.</p>
        </div>
        <div className="dw">
          <h2>Guest Experience</h2>
          <p>Prioritize guest comfort and enjoyment.
Consider personalized touches, such as welcome gifts or interactive elements.</p>
        </div>
      </div>

      <div className="event__section">
        {/* Your existing event cards */}
      </div>

      {/* Client Review Section */}
      <div className="client-reviews">
        <h2>Client Reviews</h2>
        <div className="review-container">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`review glassmorphism ${
                index === currentReviewIndex ? "active" : ""
              }`}
            >
              <p>{review}</p>
            </div>
          ))}
        </div>
        {/* User Review Input */}
        <div className="user-review-input">
          <textarea
            placeholder="Write your review here..."
            value={userReview}
            onChange={(e) => setUserReview(e.target.value)}
          />
          <button className="b" onClick={handleUserReview}>Submit Review</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
