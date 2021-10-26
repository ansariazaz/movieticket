import React from "react";

function Contact() {
  return (
    <div className="container5">
      <form>
        <div className="contact-form">
          <label>
            <input type="text" placeholder="Name*" required />
          </label>
          <label>
            <input type="email" placeholder="Email address*" required />
          </label>
          <label>
            <textarea placeholder="Message*" required></textarea>
          </label>
          <button type="submit" className="btn">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
