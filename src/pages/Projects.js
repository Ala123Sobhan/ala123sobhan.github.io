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
            return(
            <div className="project-grid">
               <Card shadow={20} style={{minWidth:"450", margin:"auto", height:"100%"}}>
                   <CardTitle style={{color:"#ffff", height:"176px", background:'url(https://thumbs.dreamstime.com/b/programming-language-java-inscription-background-computer-code-modern-digital-technologies-training-154898846.jpg) center / cover'}}>
                    Minesweeper
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
              

               <Card shadow={20} style={{minWidth:"450", margin:"auto", height:"100%"}}>
                   <CardTitle style={{color:"#ffff", height:"176px", background:'url(https://thumbs.dreamstime.com/b/programming-language-java-inscription-background-computer-code-modern-digital-technologies-training-154898846.jpg) center / cover'}}>
                   School Database System
                   </CardTitle>
                   <CardText>
                   Used Java to develop a school database system. The project is able to read files and construct objects and manipulate data and
                   has a user menu where the user can interact and retrieve data and query from the database.  
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"20px"}} href="https://github.com/Ala123Sobhan/School-Database" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"30px"}} href="https://www.youtube.com/watch?v=ISz9x1AhAsE" rel="noopener noreferrer" target="_blank">Demo</a></Button>
                 </CardActions>
                 <CardMenu style={{color:"#fff"}}>
                   <IconButton name="share"/>
                 </CardMenu>
               </Card>

               <Card shadow={20} style={{minWidth:"450",margin:"auto", height:"100%"}}>
                   <CardTitle style={{color:"#ffff", height:"176px", background:'url(https://thumbs.dreamstime.com/b/programming-language-java-inscription-background-computer-code-modern-digital-technologies-training-154898846.jpg) center / cover'}}>
                    Hotel Managment System
                   </CardTitle>
                   <CardText>
                   Used Entity Relationship Diagram, SQL & Java to create a hotel management system for hotel management authorities to keep track of the branches and customer information, booking information, room
                   availability, payment status etc.
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"20px"}} href="https://github.com/Ala123Sobhan/Hotel-Management-System" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    
                    
                 </CardActions>
                 <CardMenu style={{color:"#fff"}}>
                   <IconButton name="share"/>
                 </CardMenu>
               </Card>

              {/* <Card shadow={20} style={{minWidth:"450",margin:"auto", height:"100%"}}>
                   <CardTitle style={{color:"#ffff", height:"176px", background:'url(https://stackify.com/wp-content/uploads/2018/09/Java-Debugging-Tips-1280x720.jpg) center / cover'}}>
                    Connect four
                   </CardTitle>
                   <CardText>
                   Used Java and Graphical User Interface to make a traditional Connect4 game where the user can select the dimensions of
                   the grid. The objective of the game is that the player has to match four of his color components by connecting them row or column or diagonal wise.
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"20px"}} href="https://github.com/Ala123Sobhan/Connect4" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    
                    
                 </CardActions>
                 <CardMenu style={{color:"#fff"}}>
                   <IconButton name="share"/>
                 </CardMenu>
               </Card>
               
               <Card shadow={20} style={{minWidth:"450",margin:"auto", height:"100%"}}>
                   <CardTitle style={{color:"#ffff", height:"176px", background:'url(https://stackify.com/wp-content/uploads/2018/09/Java-Debugging-Tips-1280x720.jpg) center / cover'}}>
                    Treasure Hunt
                   </CardTitle>
                   <CardText>
                   Java project where a player can go through a series of rooms and battle with certain monsters to advance to the next level
                    until the player makes it to the final room which has a treasure
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"20px"}} href="https://github.com/Ala123Sobhan/Treasure-Hunt" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    
                    
                 </CardActions>
                 <CardMenu style={{color:"#fff"}}>
                   <IconButton name="share"/>
                 </CardMenu>
            </Card>
            */}
              
            </div>)
        }
        else if(this.state.activeTab === 1)
        {
            return(<div className="project-grid">

                <Card shadow={20} style={{minWidth:"450", margin:"auto", height:"100%"}}>
                   <CardTitle style={{color:"black", height:"176px", background:'url(https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg) center / cover'}}>
                    TicTacToe
                   </CardTitle>
                   <CardText>
                    A Javascript game, Xs and Os,for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"20px"}} href="https://github.com/Ala123Sobhan/TicTacToe-JS" rel="noopener noreferrer" target="_blank">Github</a></Button>  
                 </CardActions>
                 <CardMenu style={{color:"#fff"}}>
                   <IconButton name="share"/>
                 </CardMenu>
               </Card>

               <Card shadow={20} style={{minWidth:"450", margin:"auto", height:"100%"}}>
                   <CardTitle style={{color:"black", height:"176px", background:'url(https://res.cloudinary.com/practicaldev/image/fetch/s--ohpJlve1--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/drquzbncy/image/upload/v1586605549/javascript_banner_sxve2l.jpg) center / cover'}}>
                    Drum Kit
                   </CardTitle>
                   <CardText>
                    Used JavaScript, CSS and HTML to create a website where user can play various sounds on drum set
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"20px"}} href="https://github.com/Ala123Sobhan/Javascript-Drum-Kit" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"30px"}} href="https://www.youtube.com/watch?v=rCT9LQAOFLM" rel="noopener noreferrer" target="_blank">Demo</a></Button>
                 </CardActions>
                 <CardMenu style={{color:"#fff"}}>
                   <IconButton name="share"/>
                 </CardMenu>
               </Card>
                
            </div>)
        }
        else if(this.state.activeTab === 2)
        {
            return(<div  className="project-grid">
                 <Card shadow={20} style={{minWidth:"450", margin:"auto", height:"100%"}}>
                   <CardTitle style={{color:"#fff", height:"176px", background:'url(https://wonism.github.io/static/reactjs-0cd37998fdd55154083a64432279fc80.jpg) center / cover'}}>
                    FavLinks
                   </CardTitle>
                   <CardText>
                    A React App where user can save his favorite links using form submission.
                    The links are displayed using Table. User can delete the table content using remove button.
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"20px"}} href="https://github.com/Ala123Sobhan/favLinks" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    
                   
                 </CardActions>
                 <CardMenu style={{color:"#fff"}}>
                   <IconButton name="share"/>
                 </CardMenu>
               </Card>

               <Card shadow={20} style={{minWidth:"450", margin:"auto", height:"100%"}}>
                   <CardTitle style={{color:"#fff", height:"176px", background:'url(https://wonism.github.io/static/reactjs-0cd37998fdd55154083a64432279fc80.jpg) center / cover'}}>
                    Design Pad
                   </CardTitle>
                   <CardText>
                    A React App where user can drag colors and design the pad as per his will .
                    User can reset the design of the design pad and get back to the intial state.
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"20px"}} href="https://github.com/Ala123Sobhan/design-pad/tree/development" rel="noopener noreferrer" target="_blank">Github</a></Button>
                 </CardActions>
                 <CardMenu style={{color:"#fff"}}>
                   <IconButton name="share"/>
                 </CardMenu>
               </Card>

               <Card shadow={20} style={{minWidth:"450", margin:"auto", height:"100%"}}>
                   <CardTitle style={{color:"#fff", height:"176px", background:'url(https://wonism.github.io/static/reactjs-0cd37998fdd55154083a64432279fc80.jpg) center / cover'}}>
                    Weather App
                   </CardTitle>
                   <CardText>
                    A React App where user can select a particular place through a drop down list of cities and countries and retrieve weather information about that particular place.
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"20px"}} href="https://github.com/Ala123Sobhan/Weather-App" rel="noopener noreferrer" target="_blank">Github</a></Button>
                 </CardActions>
                 <CardMenu style={{color:"#fff"}}>
                   <IconButton name="share"/>
                 </CardMenu>
               </Card>
               
            </div>)
        }
            else if(this.state.activeTab === 3)
            {
                return (<div className="project-grid">
                     <Card shadow={20} style={{minWidth:"450", margin:"auto", height:"100%"}}>
                   <CardTitle style={{color:"#fff", height:"176px", background:'url(https://aplusweb.design/wp-content/uploads/2017/11/html5-and-css3.png) center / cover'}}>
                    Cuisines
                   </CardTitle>
                   <CardText>
                    A website of diverse and delicious 5 cuisines that one must try. 
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"20px"}} href="https://github.com/Ala123Sobhan/Cuisines" rel="noopener noreferrer" target="_blank">Github</a></Button>
                 </CardActions>
                 <CardMenu style={{color:"#fff"}}>
                   <IconButton name="share"/>
                 </CardMenu>
               </Card>

               <Card shadow={20} style={{minWidth:"450", margin:"auto", height:"100%"}}>
                   <CardTitle style={{color:"#fff", height:"176px", background:'url(https://aplusweb.design/wp-content/uploads/2017/11/html5-and-css3.png) center / cover'}}>
                    Bangladesh
                   </CardTitle>
                   <CardText>
                    A website about colorful and beautiful culture of Bangladesh. 
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"20px"}} href="https://github.com/Ala123Sobhan/Bangladesh" rel="noopener noreferrer" target="_blank">Github</a></Button>
                 </CardActions>
                 <CardMenu style={{color:"#fff"}}>
                   <IconButton name="share"/>
                 </CardMenu>
               </Card>

               <Card shadow={20} style={{minWidth:"450", margin:"auto", height:"100%"}}>
                   <CardTitle style={{color:"#fff", height:"176px", background:'url(https://aplusweb.design/wp-content/uploads/2017/11/html5-and-css3.png) center / cover'}}>
                    Background Generator
                   </CardTitle>
                   <CardText>
                    A website for linear gradient background generator. 
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"20px"}} href="https://github.com/Ala123Sobhan/background-generator" rel="noopener noreferrer" target="_blank">Github</a></Button>
                 </CardActions>
                 <CardMenu style={{color:"#fff"}}>
                   <IconButton name="share"/>
                 </CardMenu>
               </Card>

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
              <Tab>HTML,CSS</Tab>
             </Tabs>

        
         </div>
         <div>
            <Grid>
               { <Cell col ={12}>
                  <div className="content">
                  {this.changeTabs()}
                  </div>
                </Cell>
               
                }
                    
             </Grid>
            
         </div>
        
        </div>
        )
    }
}

export default Projects
