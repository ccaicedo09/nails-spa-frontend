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
        <article className="w-full rounded border border-gray-200 bg-gray-100 my-2">
          <div className="p-6">
            <h1>{heroContent.title}</h1>
            <p>{heroContent.content}</p>
          </div>
        </article>
      )}

      {activeHero === "small" && (
        <article className="w-full rounded border border-gray-200 bg-gray-900 text-sm my-2">
          <div className="p-6">
            <h1>{heroContent.title}</h1>
            <p>{heroContent.content}</p>
          </div>
        </article>
      )}

      {activeHero === "large" && (
        <article className="w-full rounded border border-gray-200 bg-blue-600 text-lg my-2">
          <div className="p-6">
            <h1>{heroContent.title}</h1>
            <p>{heroContent.content}</p>
          </div>
        </article>
      )}

      {activeHero === "enhanced-hero" && (
        <article className="w-full rounded border border-gray-200 bg-gray-100 my-2 p-2">
          <div className="grid grid-cols-12 gap-2 items-center">
            <div className="p-6 lg:col-span-7 md:col-span-12">
              <h1 className="font-bold">Hero mejorado</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                ducimus laborum dicta repudiandae cumque asperiores enim quam
                molestiae facilis maxime esse dolores, dolorum sapiente aut
                aspernatur hic id incidunt? Consequuntur.
              </p>
              <div className="inline-flex gap-2 mt-2">
                <button className="inline-flex items-center justify-center rounded border border-transparent px-3 py-2 text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700">Acción principal</button>
                <button className="inline-flex items-center justify-center rounded border border-transparent px-3 py-2 text-sm font-medium transition-colors bg-gray-200 text-gray-900 hover:bg-gray-300">Acción secundaria</button>
              </div>
            </div>
            <div className="lg:col-span-5 md:col-span-12">
              <img
                src="https://cascai.vercel.app/hero-illustration.webp"
                alt="Hero image"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </article>
      )}

      <div className="inline-flex gap-2 my-2">
        <button
          className={`inline-flex items-center justify-center rounded border border-transparent px-3 py-2 text-sm font-medium transition-colors ${activeHero === "default" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 text-gray-900 hover:bg-gray-300"}`}
          onClick={() => setActiveHero("default")}
        >
          Hero Normal
        </button>
        <button
          className={`inline-flex items-center justify-center rounded border border-transparent px-3 py-2 text-sm font-medium transition-colors ${activeHero === "small" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 text-gray-900 hover:bg-gray-300"}`}
          onClick={() => setActiveHero("small")}
        >
          Hero Pequeño
        </button>
        <button
          className={`inline-flex items-center justify-center rounded border border-transparent px-3 py-2 text-sm font-medium transition-colors ${activeHero === "large" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 text-gray-900 hover:bg-gray-300"}`}
          onClick={() => setActiveHero("large")}
        >
          Hero Grande
        </button>
        <button
          className={`inline-flex items-center justify-center rounded border border-transparent px-3 py-2 text-sm font-medium transition-colors ${
            activeHero === "enhanced-hero" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 text-gray-900 hover:bg-gray-300"
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
