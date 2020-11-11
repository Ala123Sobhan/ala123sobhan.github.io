import React from "react";
import "./App.css";
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl"
import PageInfo from "./pages/PageInfo";
import {Link} from "react-router-dom"
import Particles from "react-tsparticles";
function App() {
  return (
    <div>
   { <div className="demo-big-content">
    <Layout >
        <Header className="top-barColor" title="Title" style={{ fontStyle:"italic", fontFamily:"Sofia"}}>
        <Particles
        id="tsparticles"
        options={{
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
        <Navigation>
                <Link style={{fontStyle:"italic", fontFamily:"Sofia"}}className ="link" to="/">Home</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Sofia"}}className ="link" to="/about">About Me</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Sofia"}}className ="link" to="/projects">Projects</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Sofia"}}className ="link" to="/contact">Contact</Link>
            </Navigation>
        </Header>
       <Drawer className="navlink" >
            <Navigation>
                <Link style={{fontStyle:"italic",fontFamily:"Sofia"}}className = "link"   to="/">Home</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Sofia"}}className ="link"  to="/about">About Me</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Sofia"}}className ="link"  to="/projects">Projects</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Sofia"}}className ="link"  to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
  
        <Content>
            <div className="page-content" />
            <PageInfo/>
        </Content>
  </Layout>
  </div>}
</div>
  );
}

export default App;