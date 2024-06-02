/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/ebc.png";

const imageAltText = "ebc";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Cyber Empowerment Podcast",
    description:
      "On Cyber Empowerment, I will sit down with industry luminaries and experts for a 30-minute conversation where they will share their views on these 4 key topics that concern students today:, - Career Growth and Development - Cybersecurity - Society and Ethics - Diversity and Inclusiveness",
    url: "https://rss.com/podcasts/cyberempowerment",
  },
  {
    title: "Microsoft BlueHat 2023 Presentation",
    description:
      "Spoke at the Microsoft 2023 BlueHat Security Conference on K-12 Cybersecurity Education",
    url: "https://www.linkedin.com/posts/aaron-tng-80825722a_msftbluehat-cybersecurity-msftstudentambassadors-activity-7132940057065230336-dQ42?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Cybersecure It",
    description:
      "Promoting Cybersecurity awareness and education through a student-led, non-profit organization.",
    url: "https://www.cybersecure-it.org/",
  }
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
