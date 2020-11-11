import React, { Component } from 'react'
import Particles from "react-tsparticles";
import {Tabs, Tab} from "react-mdl"
class Projects extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          activeTab: 0   
        }
    }
    
    render() {
        return (
            <div>    
         <div className="category-tabs">
             <Tabs activeTab={this.state.activeTab} onChange={(tabId) =>this.setState({activeTab: tabId})} ripple> 
              <Tab>Java</Tab>
              <Tab>Javascript</Tab>
              <Tab>React</Tab>
             </Tabs>

         </div>
         

        
        </div>
        )
    }
}

export default Projects
