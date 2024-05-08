// Import necessary libraries
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/home.js";
import "./App.css";


// Define the App component
const App = () => {
  return (
  
      <div>
        
        <BrowserRouter>
          
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
};

// Export the App component
export default App;
