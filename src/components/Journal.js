import React, { useState } from "react";
import "./Journal.css";

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entry.trim()) {
      setEntries([...entries, entry]);
      setEntry("");
    }
  };

  return (
    <div className="journal-container">
      <h2>Journal</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Write your thoughts here..."
        ></textarea>
        <button type="submit">Add Entry</button>
      </form>
      <div className="entries">
        {entries.map((entry, index) => (
          <div key={index} className="entry">
            {entry}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journal;
