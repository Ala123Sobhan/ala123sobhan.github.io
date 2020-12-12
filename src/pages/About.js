import React from 'react'
import Ala from "./images/AlaImg.png"
import Particles from "react-tsparticles";
import Resume from "./Resume.pdf"
import EducationInfo from "../components/EducationInfo"
import Skills from "../components/Skills"
function About() {
    return (
        <div>
               <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              //value: "#654ea3"
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 30,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#FFFFFF",
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1500,
              },
              value: 80,
            },
            opacity: {
              value: 0.7,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
              <img src={Ala} alt="Ala" className="myImg"/>
              <h6 style={{ fontFamily:"Sofia"}} className="quote">
<<<<<<< HEAD
              “Never let the fear of striking out keep you from playing the game (Ruth)”
=======
              “Never let the fear of striking out keep you from playing the game”
                -(Ruth)
>>>>>>> 79c97ae5f2106e39e7189f7a31144d725267af4f
              </h6>

               <div className="resumeInfo">
               <EducationInfo startYear={2019} endYear={2021}/>

               <hr style={{borderTop:"2px solid #ffffff"}}/>
               <Skills/>
               <hr style={{borderTop:"2px solid #ffffff"}}/>
               <h3 className="chk-title" style={{ fontFamily:"Sofia"}}>Check out my resume-</h3>

               <div className="tooltip">
               <a className="resume_link" download="Ala's resume" href={Resume}> Resume</a>
               <span  className="tooltiptext">click to download resume</span>
               </div>

           </div>
        </div>
    )
}

export default About
