


import React from 'react';
import { Link } from 'react-router-dom'; // For internal links
import logo from "../../assets/logo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_out_container">
        <div className="footer_inner_container">
          <div className="footer_data">
            {/* Logo and Social Media Icons */}
            <div>
              <div className="footer_icon">
                <img src={logo} alt="Company Logo" />
              </div>
              <div className="footer_icons">
                {/* Social Media Icons wrapped in <a> tags */}
                <a href="https://www.facebook.com/evangaditech" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookOutlinedIcon />
                </a>
                <a href="https://www.instagram.com/evangaditech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="https://www.youtube.com/@EvangadiTech" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <YouTubeIcon />
                </a>
              </div>
            </div>

            {/* Useful Links */}
            <div className="footer_links">
              <h3>Useful Links</h3>
              <ul>
                {/* Internal Links with react-router-dom */}
                <li><Link to="/how-it-works">How it works</Link></li>
                {/* External Links */}
                <li><a href="https://www.evangadi.com/legal/terms/" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
                <li><a href="https://www.evangadi.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer_links">
              <h3>Contact Info</h3>
              <ul>
                <li><a href="mailto:support@evangadi.com">support@evangadi.com</a></li>
                <li><a href="tel:+12023862702">+1-202-386-2702</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
