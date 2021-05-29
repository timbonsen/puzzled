import React from 'react';
import './button.css';

function RegularButton({ text }) {
  return (
    <button
      type="button"
      className="regularButton"
    >
      {text}
    </button>
  );
}

export default RegularButton;
