import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Podcasts from "./components/Podcasts";
import Recommendations from "./components/Recommendations";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState("Amine")
  return (
    <div className="App max-w-[1140px] mx-auto px-10">
      <h1 className="text-center text-3xl font-bold py-6 my-2">useContext</h1>
      <Router>
        <UserContext.Provider value={[user, setUser]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/podcasts" element={<Podcasts />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
