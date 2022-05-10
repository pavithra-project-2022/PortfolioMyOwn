import { useState } from "react";
import PortfolioList from "../portfoliolist/PortfolioList";
import "./Portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "design",
      title: "Design",
    },
  ];

  return (
    <>
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((e) => (
          <PortfolioList
            title={e.title}
            active={selected === e.id}
            setSelected={setSelected}
            id={e.id}
          />
        ))}
      </ul>
      <div className="cons">
        <div className="item">
          <img
            src="assets/pro.jpg"
            alt="..."
          />
          <h3>Netflix Clone</h3>
        </div>
        <div className="item">
          <img
            src="assets/pro.jpg"
            alt="..."
          />
          <h3>Simple Netflix Clone</h3>
        </div>
        <div className="item">
          <img
            src="https://mike-vom-mars.com/blog/wp-content/uploads/2015/11/android_animated_nature_relaxation_relax_entspannung_entspannen_nature_natur_naturgerausche_nature_sounds_asmr_02-300x300.jpg"
            alt="..."
          />
          <h3>Coming Soon</h3>
        </div>
      </div>
      
    </div>
    
  </>
  );
}
