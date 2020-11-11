import React, { Component } from 'react'
import minesweeper from "./minesweeper.png"
import {Card, CardTitle, CardText, CardActions,Button, CardMenu, IconButton, Tabs, Tab, Grid, Cell} from "react-mdl"
class Projects extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          activeTab: 0   
        }
    }
    changeTabs=()=>{
        if(this.state.activeTab === 0)
        {
            return(<div>
               <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
                   <CardTitle style={{color:"#ffff", height:"176px", background:'url(https://stackify.com/wp-content/uploads/2018/09/Java-Debugging-Tips-1280x720.jpg) center / cover'}}>
                    Java Project #1
                   </CardTitle>
                   <CardText>
                   Used Java and Graphical User Interface to make a traditional Minesweeper game where the user can select the dimensions of
                  the grid and number of bombs. The objective of the game is that the player has to survive the game by not revealing all the
                  cells containing bombs.
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"20px"}} href="https://github.com/Ala123Sobhan/MineSweeper" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"30px"}} href="https://www.youtube.com/watch?v=CS5sN_Az9sI&t=649s" rel="noopener noreferrer" target="_blank">Demo</a></Button>
                 </CardActions>
                 <CardMenu style={{color:"#fff"}}>
                   <IconButton name="share"/>
                 </CardMenu>
               </Card>
              
            </div>)
        }
        else if(this.state.activeTab === 1)
        {
            return(<div>
                In Javascript
            </div>)
        }
        if(this.state.activeTab === 2)
        {
            return(<div>
                In React
            </div>)
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
         <div className="projects-grid">
             <Grid>
                 <Cell col ={12}>
                  <div className="content">
                  {this.changeTabs()}
                  </div>
                 </Cell>
             </Grid>
            
         </div>
        
        </div>
        )
    }
}

export default Projects
