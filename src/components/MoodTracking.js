import React, { useState } from "react";
import "./MoodTracking.css";

const MoodTracking = () => {
  const [moods, setMoods] = useState([]);
  const [mood, setMood] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mood.trim()) {
      setMoods([...moods, { mood, date: new Date().toLocaleString() }]);
      setMood("");
    }
  };

  return (
    <div className="mood-tracking-container">
      <h2>Mood Tracking</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="How are you feeling?"
        />
        <button type="submit">Add Mood</button>
      </form>
      <div className="moods">
        {moods.map((entry, index) => (
          <div key={index} className="mood-entry">
            <span>{entry.date}</span>: {entry.mood}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodTracking;
