function Blob() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 500 500">
      <defs>
        <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFCC3F"></stop>
          <stop offset="100%" stopColor="#B88917"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#gradient)"
        d="M422 306.5q44 56.5-.5 92t-101-.5q-56.5-36-90-21.5T151 385q-46-6-25.5-57.5t-26-89q-46.5-37.5-29-85t75-37Q203 127 240 76t84.5-27q47.5 24 95 55.5t3 88.5q-44.5 57-.5 113.5z"
      ></path>
    </svg>
  );
}

export default Blob;