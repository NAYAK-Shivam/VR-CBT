import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
/*import Quest from "./components/Quest";*/
import Services from "./components/Services";
import Forum from "./components/Forum";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Journal from "./components/Journal";
import MoodTracking from "./components/MoodTracking";
import CatchThought from "./components/CatchThought";
import { UserProvider } from "./components/UserContext";
import "./components/Form.css";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/mood-tracking" element={<MoodTracking />} />
            <Route path="/catch-thought" element={<CatchThought />} />
            {/*<Route path="/Quest" element={<Quest />} />*/}
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
