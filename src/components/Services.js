import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="service">
        <h3>Support Tools</h3>
        <p>Mood tracking, journaling, and goal setting tools.</p>
        <Link to="/mood-tracking">
          <button>Track Your Mood</button>
        </Link>
      </div>
      <div className="service">
        <h3>Mindfulness and Relaxation Techniques</h3>
        <p>Guided meditations and breathing exercises.</p>
        <Link to="https://youtube.com/playlist?list=PLQiGxGHwiuD1kdxsWKFuhE0rITIXe-7yC&feature=shared">
          <button>Learn More</button>
        </Link>
      </div>
      <div className="service">
        <h3>Educational Resources</h3>
        <p>
          Articles, blogs, video tutorials, and FAQs on mental health topics.
        </p>
        <Link to="/educational-resources">
          <button>Learn More</button>
        </Link>
      </div>
      <div className="service">
        <h3>Community Support</h3>
        <p>Forums and discussion groups for sharing experiences and support.</p>
        <Link to="/community-support">
          <button>Join Now</button>
        </Link>
      </div>
      <div className="service">
        <h3>Crisis Support</h3>
        <p>Information on how to get immediate help in a crisis.</p>
        <Link to="/crisis-support">
          <button>Get Help</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
