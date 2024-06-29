"use client"
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Home = () => {
  const [hoverState, setHoverState] = useState(0);

  const handleYesClick = () => {
    Swal.fire({
      title: 'I Love You Too Meri Akloti Jaan ❤️',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  const handleNoHover = () => {
    setHoverState((prevState) => (prevState + 1) % 3);
  };

  const getNoButtonClass = () => {
    switch (hoverState) {
      case 1:
        return 'moveNoButton moveNoButton1';
      case 2:
        return 'moveNoButton moveNoButton2';
      default:
        return '';
    }
  };

  return (
    <div className="container">
      <h1>Do you Love me ❤️?</h1>
      <div className="buttons">
        <button onClick={handleYesClick}>Yes</button>
        <button
          className={getNoButtonClass()}
          onMouseEnter={handleNoHover}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Home;
