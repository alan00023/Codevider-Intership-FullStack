import React from "react";

//Rendering the contact page component with a header and a section
const ContactPage = () => {
  return (
    <div>
      <section className="contact-content">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us at:</p>
        <p>
          <strong>Email:</strong> info@animalcms.com
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Nullam ac erat ante. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Nulla
          facilisi. Integer ac sapien a orci fermentum aliquam. Praesent at
          libero nec sem facilisis tincidunt.
        </p>
      </section>
    </div>
  );
};

export default ContactPage;
