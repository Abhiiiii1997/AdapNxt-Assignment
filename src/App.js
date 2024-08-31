import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import EmptyBox from "./Components/EmptyBox";
import "./App.css"; // Assuming you have some basic CSS for layout

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/inventory" element={<EmptyBox />} />
              <Route path="/order" element={<EmptyBox />} />
              <Route path="/returns" element={<EmptyBox />} />
              <Route path="/customers" element={<EmptyBox />} />
              <Route path="/shipping" element={<EmptyBox />} />
              <Route path="/channel" element={<EmptyBox />} />
              <Route path="/integrations" element={<EmptyBox />} />
              <Route path="/calculations" element={<EmptyBox />} />
              <Route path="/reports" element={<EmptyBox />} />
              <Route path="/account" element={<EmptyBox />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
