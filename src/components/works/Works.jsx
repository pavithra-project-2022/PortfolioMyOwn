import { useState } from "react";
import "./Works.scss";

export default function Works() {
  const [currentSlide,setCurrentSlide] = useState(0)
  const data = [
    {
      id: "1",
      icon: "Personal Details",
      title:"Name  :  Pavithra SethuRaman",
      title1:"DOB  :  02-08-1992",
      title2:"Qualification  :  B.Sc CS",
      title3:"Marital Status  :  Married",
      title4:"Mother Tongue  :  Tamil",
      title5:"Language Known  :  Tamil,English",
      
    },
    {
      id: "2",
      icon: "Certification Course",
      title: "FSD  :  Certification Course completed of FULL STACK DEVELOPMENT with a First class in April 2022 in Guvi Geek Network Private Limited affiliated by IIT Madras and IIM .",
      title1:"Hardware  :  Certification completed in Computer Hardware conducted by Tamil Nadu Advanced Technical  Training Institute( Register by Govt of Tamilnadu,  Bound to Govt of India ) with Grade of A in Dec  2011.",
      title2:"DotNet  :  Certification completed in DOTNET TECHNOLOGY  Specialized in following areas(accord info matrix in  2013) (C#.NET,ASP.NET,AJAX ,SILVERLIGHT).",
      title3:"HRM  :  Certification Course completed of Human Resource  Management with a First class in April 2010."
    },
    {
      id: "3",
      icon: "Non IT Job Experience",
      title: "--> Worked as a Data Entry Executive in IndusInd Bank in Aug 2012 to Dec 2013.",
      title1: "--> Worked as a Tele Caller in Tata Business Support Service in Nov 2014 to Apr 2015.",
      title2: "--> Worked as a Teacher in Akshara Matriculation Higher Secondary School in Aug 2016 to Mar 2017.",
    },
  ];

  const handleClick = (way) =>{
    way === "left" ? setCurrentSlide(currentSlide>0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide<data.length -1 ? currentSlide+1 : 0)
  }

  return (
    <div className="works" id="works">
      
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        {data.map((e) => (
          <div className="cont">
            
            <div className="item">
            <h4>{e.icon}</h4>
              {/* <div className="left"> */}
                  <div className="leftContainer">
                  <div className="pp">{e.title}</div>
                  <div className="pp">{e.title1}</div>
                  <div className="pp">{e.title2}</div>
                  <div className="pp">{e.title3}</div>
                  <div className="pp">{e.title4}</div>
                  <div className="pp">{e.title5}</div>
                </div>
              </div>
              
            {/* </div> */}
          </div>
        ))}
      </div>
      <img src="assets/ra.png" className="arrowss left" alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/ra.png" className="arrowss right" alt="" onClick={()=>handleClick()} />
         
    </div>
  );
}
