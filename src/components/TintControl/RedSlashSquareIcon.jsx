import React from 'react';

function RedSlashSquareIcon() {
  return (
    <svg
      width="50"
      height="50"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      {/* Draw the rectangle */}
      <rect width="100" height="100" fill="transparent" stroke="red" strokeWidth="4" />

      {/* Draw the slash */}
      <line x1="10" y1="10" x2="85" y2="90" stroke="red" strokeWidth="4" />
    </svg>
  );
}

export default RedSlashSquareIcon;
