import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import FrontPage from './FrontPage';
import Startbtn from './Startbtn';
import Midbtn from './Midbtn';
import Lastbtn from './Lastbtn';
import Progress from './Progress';

function App() {
  const [blocks, setBlocks] = useState(() => {
    const savedBlocks = localStorage.getItem('blocks');
    return savedBlocks ? JSON.parse(savedBlocks) : [];
  });

  useEffect(() => {
    localStorage.setItem('blocks', JSON.stringify(blocks));
  }, [blocks]);

  const clearData = () => {
    localStorage.removeItem('blocks');
    setBlocks([]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/startbtn" element={<Startbtn />} />
        <Route path="/midbtn" element={<Midbtn />} />
        <Route path="/lastbtn" element={<Lastbtn setBlocks={setBlocks} blocks={blocks} clearData={clearData} />} />
        <Route path="/progress" element={<Progress blocks={blocks} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
