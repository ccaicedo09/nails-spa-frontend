import React, { useState } from "react";

const Hero = () => {
  const [activeHero, setActiveHero] = useState("default");

  const heroContent = {
    title: "Hero title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit libero sequi? Quo necessitatibus nam obcaecati consequatur, pariatur, porro saepe dicta, blanditiis aperiam sequi vero vel. Recusandae, sapiente voluptates impedit obcaecati quos esse numquam. Eaque beatae sapiente velit aperiam mollitia!",
  };

  return (
    <>
      {activeHero === "default" && (
        <article className="hero bg-gray my-2">
          <div className="hero-body">
            <h1>{heroContent.title}</h1>
            <p>{heroContent.content}</p>
          </div>
        </article>
      )}

      {activeHero === "small" && (
        <article className="hero hero-sm bg-dark my-2">
          <div className="hero-body">
            <h1>{heroContent.title}</h1>
            <p>{heroContent.content}</p>
          </div>
        </article>
      )}

      {activeHero === "large" && (
        <article className="hero hero-lg bg-primary my-2">
          <div className="hero-body">
            <h1>{heroContent.title}</h1>
            <p>{heroContent.content}</p>
          </div>
        </article>
      )}

      <div className="btn-group my-2">
        <button
          className={`btn ${activeHero === "default" ? "btn-primary" : ""}`}
          onClick={() => setActiveHero("default")}
        >
          Hero Normal
        </button>
        <button
          className={`btn ${activeHero === "small" ? "btn-primary" : ""}`}
          onClick={() => setActiveHero("small")}
        >
          Hero Pequeño
        </button>
        <button
          className={`btn ${activeHero === "large" ? "btn-primary" : ""}`}
          onClick={() => setActiveHero("large")}
        >
          Hero Grande
        </button>
      </div>
    </>
  );
};

export default Hero;
