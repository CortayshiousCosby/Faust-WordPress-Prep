import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <p>© {currentYear} - All rights reserved</p>
          </div>

          <div className="footer-links">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-credits">
          <p>
            Powered by{" "}
            <a
              href="https://wordpress.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              WordPress
            </a>{" "}
            and{" "}
            <a
              href="https://faustjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Faust.js
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
