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

      {activeHero === "enhanced-hero" && (
        <article className="hero bg-gray my-2 p-2">
          <div className="columns col-gap-2 flex-centered">
            <div className="hero-body column col-lg-7 col-md-12">
              <h1 className="text-bold">Hero mejorado</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                ducimus laborum dicta repudiandae cumque asperiores enim quam
                molestiae facilis maxime esse dolores, dolorum sapiente aut
                aspernatur hic id incidunt? Consequuntur.
              </p>
              <div className="btn-group mt-2">
                <button className="btn btn-primary">Acción principal</button>
                <button className="btn btn-secondary">Acción secundaria</button>
              </div>
            </div>
            <div className="column col-lg-5 col-md-12">
              <img
                src="https://cascai.vercel.app/hero-illustration.webp"
                alt="Hero image"
                className="img-responsive rounded"
              />
            </div>
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
        <button
          className={`btn ${
            activeHero === "enhanced-hero" ? "btn-primary" : ""
          }`}
          onClick={() => setActiveHero("enhanced-hero")}
        >
          Hero mejorado
        </button>
      </div>
    </>
  );
};

export default Hero;
