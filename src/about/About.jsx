import React from "react";
import "./About.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import ResumePavithra from '../pdf/Resume Pavithra.pdf'
import { motion } from "framer-motion";

export default function About() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ["Front End Developer", "Designer"],
    });
  }, []);
 
  return (
    <div className="row">
      <div className="topContent">
        <div className="topContent__container">
        <h6 className="ss">I am, </h6> 
        <motion.h1   initial={{ opacity: 0 }}
  whileInView={{ opacity: 3 }} transition={{ duration: 2,repeat:Infinity }}>Pavithra SethuRaman</motion.h1>
          <p>
            Full Stack Developer{" "}
            <span ref={textRef} className="F">
              !!!
            </span>
          </p>
          
            <a href={ResumePavithra} rel="noreferrer" className="topContent__downloadButton" target="_blank">View CV</a>
          
        </div>
      </div>
    </div>
  );
}
