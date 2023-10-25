import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="bg-secondary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        

        <p className="py-2">
          <span className="font-bold">Email:</span> <a href="mailto: angelica.beltran11@gmail.com">angelica.beltran11@gmail.com</a>
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> (520)461-0235
        </p>
      </div>
    </section>
  );
};

export default Contact;
