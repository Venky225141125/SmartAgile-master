import React from 'react';
import './Footer.css'; // Make sure to import the CSS file

const Footer = () => {
  const today = new Date();
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>TMachine Software Solutions Private Limited &copy; {today.getFullYear()} Smart_Agile</p>
      </div>
    </footer>
  );
};

export default Footer;
