import React from 'react'
import Ala from "./images/AlaImg.png"
import Particles from "react-tsparticles";
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
              <p style={{ fontFamily:"Sofia"}} className="quote">
              “Never let the fear of striking out keep you from playing the game”

                              ― B. Ruth

              </p>

        </div>
    )
}

export default About
