import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
         
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 Housing Society.</p>
              <p>Bangladesh</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +1335 5368 6898
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              @hgdhgmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the Company</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur, eos eius obcaecati recusandae eaque harum incidunt ipsam
            architecto dolore omnis amet molestias! Nobis animi atque, unde
            error voluptas dolor explicabo.
          </p>

          <div className="social">
            <FaFacebook
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaTwitter
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
