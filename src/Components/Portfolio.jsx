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
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Qkart-Ecommerce website",
    description:
      "QKart is an e-commerce application where the user implemented authentication, shopping cart, and checkout logic. They also improved the UI with responsive design elements and utilized REST APIs to dynamically load data from the backend server",
    url: "https://namita-q-kart.netlify.app/",
  },
  {
    title: "Qtrip Dynamic",
    description:
      "QTrip is a travel website where the user created dynamic web pages using HTML, CSS, and JavaScript, enhanced UX with multi-select filters and image carousels, and utilized localStorage to persist user preferences on the client-side",
    url: "https://namita-qtrip-dynamic.netlify.app/",
  },
  {
    title: "Weather app",
    description:
      "The weather dashboard provides real-time weather information, including current conditions and a 7-day forecast for different cities. It offers an intuitive interface for users to easily access weather data and plan their activities accordingly",
    url: "https://weather-dashboard-beige.vercel.app/",
  },
  {
    title: "Admin-UI",
    description:
      "The admin UI is an intuitive interface that allows administrators to manage users, monitor data, and configure settings, featuring organized navigation, dashboards, and interactive elements for efficient management",
    url: "https://namita-admin-ui.netlify.app/",
  },
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
