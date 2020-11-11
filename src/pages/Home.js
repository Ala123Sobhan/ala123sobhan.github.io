import React from 'react'
import {Grid, Cell} from 'react-mdl'
import Ala from "./Ala_Img.JPG"
import Particles from "react-tsparticles";

function Home() {
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
                value_area: 1000,
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
      <div >
              {/* <img src={Ala} alt="Ala" className="myImg"/>*/}
                <div className="heading-text">
                <h1  style={{fontFamily:"Sofia"}}>Ala Sobhan</h1>
                <p  style={{ fontFamily:"Sofia"}}>
                 An aspiring and driven computer science student at Lehman College in NYC.
                 Looking for opportunities that will let me utilize my education
                  and skills in the tech industry</p>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/ala-sobhan-892b9017a/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    </a>
                    <a href="https://github.com/Ala123Sobhan" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCVsQpBto3TGHhwhKiDiB-bQ?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-youtube-square" aria-hidden="true"/>
                    </a>
                    

                </div>
   
                </div>

           
         
      </div>
        </div>
    )
}

export default Home
