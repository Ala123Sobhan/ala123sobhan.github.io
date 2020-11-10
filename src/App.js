import React from "react";
import "./App.css";
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl"
import PageInfo from "./pages/PageInfo";
import {Link} from "react-router-dom"

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation >
                <Link className ="link" to="/">Home</Link>
                <Link className ="link" to="/about">About Me</Link>
                <Link className ="link" to="/projects">Projects</Link>
                <Link className ="link" to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link className ="link"  to="/">Home</Link>
                <Link className ="link"  to="/about">About Me</Link>
                <Link className ="link"  to="/projects">Projects</Link>
                <Link className ="link"  to="/contact">Contact</Link>
            </Navigation>
        </Drawer>

        <Content>
            <div className="page-content" />
            <PageInfo/>
        </Content>
    </Layout>
</div>
   
  );
}

export default App;