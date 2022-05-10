import "./Testimonials.scss";

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Pavithra SethuRaman",
      title: "Web Developer",
      img: "assets/girl.jpg",
      icon: "assets/youtube.jpg",
      desc: "Click to View my GitHub Repos :) ",
      link:"https://github.com/PavithraSethuraman/",
      featured: true,
    },
    {
      id: 2,
      name: "Pavithra SethuRaman",
      title: "Web Developer",
      img: "assets/girl.jpg",
      icon: "assets/youtube.jpg",
      desc: "Click to Visit my Linked In Profile :)",
      link:"https://www.linkedin.com/in/pavithra-sethuraman-300295236/",
      featured: true,
    },
    {
      id: 3,
      name: "Pavithra SethuRaman",
      title: "Web Developer",
      img: "assets/girl.jpg",
      icon: "assets/youtube.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiaat.",
      featured: true,
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Active In</h1>
      <div className="cont">
        {data.map((e) => (
          <div className={data.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/bluearrow.png" className="left" alt="" />
              <img className="user" src={e.img} alt="" />
              <img className="right" src={e.icon} alt="" />
            </div>
            <div className="center">{e.desc}</div>
            <a className="center" href={e.link} without rel="noreferrer" target="_blank">Link</a>
            <div className="bottom">
              <h4>{e.name}</h4>
              <h6>{e.title}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
