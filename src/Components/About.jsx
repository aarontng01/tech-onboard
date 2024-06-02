/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/award.png";

const imageAltText = "award";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a CS student at the University of Washington, a BlueHat Conference Speaker, Microsoft Certified Azure Cybersecurity Architect and Microsoft Certified Azure Solutions Architect.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Azure",
  "Cybersecurity",
  "Education",
  "Public Policy"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am deeply passionate about the impact of Cybersecurity to society and actively promoting K-12 Cybersecurity Awareness and Education. Check out my podcast series Cyber Empowerment for Students and Young Adults to hear from my expert guests at Microsoft, Google, Uber, Remitly, Activision Blizzard King, US Army CENTCOM and SYSUSA about their journey to build a successful career in the IT industry!";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
