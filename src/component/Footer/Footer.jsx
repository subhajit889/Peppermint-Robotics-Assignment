import React from "react";
import "./footer.css";
import logo from "../Assets/Peepermint Logo.png";
import { ImLocation2 } from "react-icons/im";
import { CgPhone } from "react-icons/cg";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillMail
} from "react-icons/ai";


const quickLink = [
  "Home",
  "FAQs",
  "Case Studies",
  "Products",
  "Blog",
  "Privacy Policy",
];

const recentPost = [
  "Elevating Efficiency: Evolution of Material Handling with AMRs",
  "Autonomous Mobile Robots: The Future of Efficient Material Handling",
  "Robotic Floor Scrubbers : The Future of Autonomous Cleaning at Airports",
];

const Footer = () => {
  return (
    <div className="footerMain">
      <div className="top">
        <div className="left">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="contact">
            <div className="description">
              <p>Aubotz Labs Pvt Ltd</p>
              <p>CIN: U29100MH2019PTC324975</p>
            </div>
            <div className="contactInfo">
              <div className="contactAddress">
                <div>
                  <ImLocation2 color="#00f0ef" />
                </div>

                <p id="details">
                  Survey No 116, 3/1, opp. ShubhTej Mangal Karyalay, near Balaji
                  Chowk, Jai Bhavani Nagar, Pashan, Pune, Maharashtra 411021
                </p>
              </div>
              <div className="contactEmail">
                <div>
                  <AiFillMail color="#00f0ef" />
                </div>
                <p id="details">
                  <Link to="mailto:info@getpeppermint.co">
                    info@getpeppermint.co
                  </Link>
                </p>
              </div>
              <div className="contactPhone">
                <div>
                  <CgPhone color="#00f0ef" />
                </div>
                <p id="details">+91 89567 10044</p>
              </div>
            </div>
          </div>
        </div>
        <div className="middle">
          <h1>Quick Links</h1>
          <ul>
            {quickLink.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>
        <div className="right">
          <h1>Recent Posts</h1>
          <ul>
            {recentPost.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <div className="bottomLeft">
          getpeppermint © 2023. All rights reserved.
        </div>
        <div className="bottomRight">
          <ul>
            <li>
              <Link to="https://twitter.com/getpeppermint" target="_blank">
                <AiFillFacebook/>
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/company/getpeppermint"
                target="_blank">
                <AiFillLinkedin />
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/getpeppermint" target="_blank">
                <AiFillTwitterSquare />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.youtube.com/channel/UCsBgxvgDYRPHEKPp_tU-Qyw" target="_blank">
                <AiFillYoutube />
              </Link>
            </li>
            <li>
              <Link to="mailto:info@getpeppermint.co" target="_blank">
                <AiFillMail />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
