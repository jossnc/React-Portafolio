import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { projectsData } from "./Data";
import "./work.css";
import Works from "./Works";

const Work = () => {
  
  return (
    <div>
      <section className="work section" id="prtafolio">
        <h2 className="section__title">Portafolio</h2>
        <span className="section__subtitle">Most recent works</span>

        <Works />
      </section>
    </div>
  );
};

export default Work;
