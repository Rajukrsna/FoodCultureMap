import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Homepage';
import Execute from './components/'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/execute" element={<Execute/>}/>
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
