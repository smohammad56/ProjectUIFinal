import React from 'react';

function HalfShadedSquareIcon() {
  return (
    <svg
    width="50"
    height="50"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      {/* Draw the square */}
      <rect width="100" height="100" fill="white" />

      {/* Draw the shading */}
      <rect width="100" height="50" fill="black" />
    </svg>
  );
}

export default HalfShadedSquareIcon;
