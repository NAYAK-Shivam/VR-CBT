import React, { useState } from "react";
import { useUser } from "./UserContext";
import "./Forum.css";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [thoughts, setThoughts] = useState("");
  const { user } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (thoughts.trim()) {
      const newPost = {
        username: user.username,
        thoughts,
        date: new Date().toLocaleString(),
      };
      setPosts([...posts, newPost]);
      setThoughts("");
    }
  };

  return (
    <div className="forum-container">
      <h2>Forum</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={thoughts}
          onChange={(e) => setThoughts(e.target.value)}
          placeholder="Share your thoughts..."
          required
        ></textarea>
        <button type="submit">Post</button>
      </form>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <div className="post-header">
              <span className="username">{post.username}</span>
              <span className="date">{post.date}</span>
            </div>
            <div className="thoughts">{post.thoughts}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
