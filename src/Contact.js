import React from "react";
import "./Contact.css";
import {
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Contact() {
  return (
    <div className="contact">
      <div className="contact_title">
        <h1>CONTACT ME</h1>
      </div>
      <div className="contact_info">
        <h1 className="contact_heading">
          Thank you for being touched and being ready to work with me
        </h1>
        <div className="contact_inner">
          <div className="contact_email">
            <EmailIcon style={{ borderRadius: "20px", color: "red" }} />
            <h2>MESHACKRONO05@GMAIL.COM</h2>
          </div>
          <div className="contact_location">
            <LocationOnIcon
              style={{ fontSize: "40px", color: " rgba(75, 71, 71, 0.664)" }}
            />
            <h2>Kenya</h2>
          </div>
        </div>
        <div className="contact_images">
          <div className="contact_info">
            <h3>Also follow me on</h3>
          </div>
          <TwitterShareButton
            title="@meshackrono10"
            url=" https://twitter.com/ "
          >
            <TwitterIcon size={50} round className="twitter_logo" />
          </TwitterShareButton>
          <LinkedinShareButton
            title="@meshackrono10"
            url="https://www.linkedin.com/  "
          >
            <div className="icon-socmed-white linkedin">
              <LinkedinIcon size={50} round={true} />
            </div>
          </LinkedinShareButton>
          <EmailShareButton title="@meshackrono10" url="https://github.com/  ">
            <div className="icon-socmed-white linkedin">
              <EmailIcon size={50} round={true} />
            </div>
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
}

export default Contact;
