import React from "react";
import "./Mission.css";
import { motion } from "framer-motion";
import img1 from "./SERVICE1.png";
const Mission = () => {


  return (
    <section id="mission" className="mission-section">
      <div className="container">
        <div className="mission-content">
          <br></br>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            Mission Statement
          </motion.h2>
          <motion.div
            className="mission-statement"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <p>
              At Studio Signature Cabinetry, our number one employee is THE
              CUSTOMER. We believe that our success is built on the satisfaction
              and trust of our clients. Every decision we make and every action
              we take is centered around delivering exceptional service and
              exceeding customer expectations. We are dedicated to understanding
              and fulfilling the unique needs of each client, ensuring that
              their experience with us is nothing short of extraordinary.
              SERVICE is not just a part of what we do; it is our mission
              statement. We are committed to providing exceptional service in
              every aspect of our work, making sure that our clients always come
              first.
            </p>
            <div className="growth-image"></div>
          </motion.div>
          <br></br>
          <br></br>
          <img src={img1} alt="Placeholder" className="missionimg" />
          <br></br>

        </div>
      </div>
      <br></br>
      <br></br>
    </section>
  );
};

export default Mission;
