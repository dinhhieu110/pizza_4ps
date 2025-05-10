import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-first-column">
          <div>
            <h1 style={{ letterSpacing: "4px", fontWeight: "400" }}>
              PIZZA 4P'S
            </h1>
            <h5>PIZZA 4PS Joint Stock Company</h5>
          </div>
          <div>
            <h5>Address</h5>
            <p>
              8/13-8/15-8/17 Le Thanh Ton, Ben Nghe Ward,
              <br /> District 1, Ho Chi Minh City
            </p>
          </div>
          <div>
            <h5>Call our hotline for further support</h5>
            <p>19006043</p>
          </div>
        </div>
        <div className="footer-content-second-column">
          <div>
            <h5>Certificate Of Food Safety Conditions</h5>
            <p>
              No 2895/2018/ATTP-CNĐK licensed by the Food <br /> Safety
              Management Authority Of HCM City on <br /> 05/07/2018
            </p>
          </div>
          <div>
            <h5>Business Registration Certificate</h5>
            <p>
              No 0313168515 licensed by Department Of Planning And Investment Of
              <br />
              Ho Chi Minh City on <br /> 19/03/2015
            </p>
          </div>
        </div>
        <div className="footer-content-third-column">
          <div>
            <h5>Terms & Conditions</h5>
            <p>General Terms & Conditions</p>
            <p>Payment Policy</p>
            <p>E-voucher Term & Condition</p>
          </div>
          <div>
            <h5>Customer Services</h5>
            <p>Shipping Policy</p>
            <p>Return/ cancel and refund Policy</p>
          </div>
        </div>
        <div className="footer-content-forth-column">
          <h5>Be the first to receive our latest updates</h5>
          <div className="input-field">
            <input type="text" name="" id="" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-copy-right">
        <p>Copyright © 2025 Pizza 4P’s. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
