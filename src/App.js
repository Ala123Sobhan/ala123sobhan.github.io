import React from "react";
import "./App.css";
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl"
import PageInfo from "./pages/PageInfo";
import {Link} from "react-router-dom"
//import Particles from "react-tsparticles";
function App() {
  return (
    <div>
   { <div className="demo-big-content">
    <Layout >
        <Header className="top-barColor" title={<Link style={{textDecoration:"none", fontFamily:"Sofia",color:"white"}} to ="/">My Portfolio</Link>} scroll>

        <Navigation>
                <Link style={{fontStyle:"italic", fontFamily:"Sofia", fontWeight:"bold" }}className="link"  to="/">Home</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Sofia", fontWeight:"bold"}} className ="link" to="/about">About Me</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Sofia", fontWeight:"bold"}} className ="link" to="/projects">Projects</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Sofia", fontWeight:"bold"}} className ="link" to="/contact">Contact</Link>
            </Navigation>
        </Header>

       <Drawer className="navlink" >
            <Navigation>
                <Link style={{fontStyle:"italic",fontFamily:"Sofia", color:"#4B0082",fontWeight:"bold"}}  className ="slink"   to="/">Home</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Sofia",color:"#4B0082",fontWeight:"bold"}}  className ="slink"  to="/about">About Me</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Sofia",color:"#4B0082",fontWeight:"bold"}} className ="slink"  to="/projects">Projects</Link>
                <Link style={{fontStyle:"italic", fontFamily:"Sofia",color:"#4B0082",fontWeight:"bold"}} className ="slink"  to="/contact">Contact</Link>
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