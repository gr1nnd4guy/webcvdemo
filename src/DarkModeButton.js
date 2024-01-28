import React, { useState, useEffect } from 'react';
import './DarkModeButton.css';

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Thay đổi màu sắc các phần tử tùy ý dựa trên trạng thái dark mode
    const elementsToChangeColor = document.querySelectorAll('.change-color');
    elementsToChangeColor.forEach(element => {
      element.style.color = darkMode ? 'white' : '#333';
      element.style.backgroundColor = darkMode ? '#333' : 'white';
    });
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    
    <button onClick={handleDarkModeToggle} className="dark-mode-button text-center col-md-2 ">
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeButton;
