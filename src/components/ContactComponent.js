import React from "react";
import { Button } from "reactstrap";
import { FaPhone, FaFax, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left column: Address */}
        <div className="col-12 col-md-6">
          <h3>Location Information</h3>
          <h5>Our Address</h5>
          <p>
            121, Clear Water Bay Road<br />
            Clear Water Bay, Kowloon<br />
            HONG KONG
          </p>
          <p><FaPhone />: +852 1234 5678</p>
          <p><FaFax />: +852 8765 4321</p>
          <p><FaEnvelope />: <a href="mailto:confusion@food.net">confusion@food.net</a></p>

          <div className="d-flex gap-2 mt-3">
            <Button color="primary">
              <FaPhone /> Call
            </Button>
            <Button color="info">
              Skype
            </Button>
            <Button color="success">
              <FaEnvelope /> Email
            </Button>
          </div>
        </div>

        {/* Right column: Map placeholder */}
        <div className="col-12 col-md-6">
          <h5>Map of our Location</h5>
          <div 
            style={{ 
              width: "100%", 
              height: "300px", 
              backgroundColor: "#e0e0e0", 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center",
              borderRadius: "5px"
            }}
          >
            Map Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
