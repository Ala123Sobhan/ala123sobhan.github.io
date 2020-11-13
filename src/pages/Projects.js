import React, { Component } from 'react'

import {Card, CardTitle, CardText, CardActions,Button,Tabs, Tab} from "react-mdl"


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
            return (
            <div className="project1">

              <div style={{marginLeft:"120px",marginRight:"110px", flexGrow:"1"}}>
               <Card shadow={5} style={{minWidth:"450", margin:"auto", height:"100%"}} className="card1">

                   <CardTitle style={{color:"#ffff", height:"300px",fontWeight:"bolder", background:'url(https://vectorified.com/images/minesweeper-icon-24.jpg) center / cover'}}>
                   </CardTitle>
                   <CardText style={{height:"150px", textAlign:"justify"}} >
                  <h5 style={{color:"#2e3951"}}> Minesweeper</h5>
                   Used Java and Graphical User Interface to make a traditional Minesweeper game
                    where the user can select the dimensions of
                   the grid and number of bombs. The objective of the game 
                   is that the player has to survive the game by not revealing all the
                   cells containing bombs.
                   </CardText>

                <CardActions>
                    <Button  ><a   style={{textDecoration:"none", color:"royalblue", padding:"35px"}} href="https://github.com/Ala123Sobhan/MineSweeper" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    <Button  ><a   style={{textDecoration:"none", color:"royalblue", padding:"35px"}} href="https://www.youtube.com/watch?v=CS5sN_Az9sI&t=649s" rel="noopener noreferrer" target="_blank">Demo</a></Button>
                 </CardActions>

               
               </Card>
              </div>
                
                <div style={{marginLeft:"10px", marginRight:"120px", flexGrow:"1"}}>
               <Card shadow={5} style={{minWidth:"450", margin:"auto", height:"100%"}}>
                   <CardTitle style={{color: "#ffff", height:"300px", fontWeight:"bolder", background:'url(https://www.eparent.com/wp-content/uploads/2020/07/36425689-stock-vector-classical-school-building-isolated-on-white-background.jpg) center / cover'}}>
                   </CardTitle>
                   <CardText  style={{height:"150px",textAlign:"justify"}}>
                     <h5 style={{color:"#2e3951"}}>School Database System</h5>
                   Used Java to develop a school database system. The project is able to read files and construct objects and manipulate data and
                   has a user menu where the user can interact and retrieve data and query from the database.  
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"35px"}} href="https://github.com/Ala123Sobhan/School-Database" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"35px"}} href="https://www.youtube.com/watch?v=ISz9x1AhAsE" rel="noopener noreferrer" target="_blank">Demo</a></Button>
                 </CardActions>
                 
               </Card>
               </div>

               <div style={{margingLeft:"60px",marginRight:"120px", flexGrow:"1"}}>
               <Card shadow={5} style={{minWidth:"450",margin:"auto", height:"100%"}}>
                   <CardTitle style={{color: "#ffff", height:"300px", fontWeight:"bolder", background:'url(https://www.flaticon.com/svg/static/icons/svg/3004/3004703.svg) center / cover'}}>
                   </CardTitle>
                   <CardText style={{height:"150px",textAlign:"justify"}}>
                     <h5  style={{color:"#2e3951"}}>Hotel Managment System</h5>
                   Used Entity Relationship Diagram, SQL & Java to create a hotel management system for hotel management authorities to keep track of the branches and customer information, booking information, room
                   availability, payment status etc.
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"20px"}} href="https://github.com/Ala123Sobhan/Hotel-Management-System" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    
                    
                 </CardActions>
                 
               </Card>
               </div>
               {/* <div style={{position:'fixed', top:"80%",left:"50%"}}>*/ }

              <div style={{marginLeft:"-190px",marginRight:"720px",paddingTop:"70px", flexGrow:"1",paddingBottom:"40px"}}>
              <Card shadow={5} style={{minWidth:"450",margin:"auto", height:"100%"}}>
                   <CardTitle style={{color:"#ffff", height:"300px", background:'url(https://www.flaticon.com/svg/static/icons/svg/2721/2721271.svg) center / cover'}}>
                   </CardTitle>
                   <CardText style={{height:"150px",textAlign:"justify"}}>
                   <h5  style={{color:"#2e3951"}}> Connect four</h5>
                   Used Java and Graphical User Interface to make a traditional Connect4 game where the user can select the dimensions of
                   the grid. The objective of the game is that the player has to match four of his color components by connecting them row or column or diagonal wise.
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"20px"}} href="https://github.com/Ala123Sobhan/Connect4" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    
                    
                 </CardActions>
                 
               </Card>

               </div>
              
             
            
                 
            </div>)
        }

        else if(this.state.activeTab === 1)
        {
            return(<div className="project-grid">
                <div style={{marginLeft:"330px",marginRight:"150px"}}>
                <Card shadow={5} style={{minWidth:"450", margin:"auto", height:"100%"}}>
                   <CardTitle style={{color: "#ffff", height:"300px", fontWeight:"bolder", background:'url(https://media.istockphoto.com/vectors/tic-tac-toe-game-flat-design-icon-vector-id1146577964?b=1&k=6&m=1146577964&s=612x612&w=0&h=49sBrPcj3DRHT-cCjZ1mOoV_b5HxpLh4dLNUxLl_ANI=) center / cover'}}>
                   </CardTitle>
                   <CardText style={{height:"150px",textAlign:"justify"}}>
                   <h5  style={{color:"#2e3951"}}> TicTacToe</h5>
                    A Javascript game, Xs and Os,for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"35px"}} href="https://github.com/Ala123Sobhan/TicTacToe-JS" rel="noopener noreferrer" target="_blank">Github</a></Button>  
                 </CardActions>
                
               </Card>
               </div>

               <div style={{marginRight:"150px"}}>

               <Card shadow={5} style={{minWidth:"450", margin:"auto", height:"100%"}}>
                   <CardTitle style={{color: "#ffff", height:"300px", fontWeight:"bolder", background:'url(https://cdn.iconscout.com/icon/premium/png-256-thumb/drum-2071050-1745460.png) center / cover'}}>
                   </CardTitle>
                   <CardText style={{height:"150px",textAlign:"justify"}}>
                     <h5 style={{color:"#2e3951"}}>Drum Kit</h5>
                    Used JavaScript, CSS and HTML to create a website where user can play various sounds on drum set
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"35px"}} href="https://github.com/Ala123Sobhan/Javascript-Drum-Kit" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"35px"}} href="https://www.youtube.com/watch?v=rCT9LQAOFLM" rel="noopener noreferrer" target="_blank">Demo</a></Button>
                 </CardActions>
                 
               </Card>
        </div>
            </div>)
        }
        else if(this.state.activeTab === 2)
        {
            return(<div  className="project-grid">
                 <Card shadow={5} style={{minWidth:"450", margin:"auto", height:"100%"}}>
                   <CardTitle style={{color: "#1C2331", height:"300px", fontWeight:"bolder", background:'url(https://www.flaticon.com/svg/static/icons/svg/841/841378.svg) center / cover'}}>
                   </CardTitle>
                   <CardText style={{height:"150px",textAlign:"justify"}}>
                     <h5  style={{color:"#2e3951"}}>FavLinks</h5>
                    A React App where user can save his favorite links using form submission.
                    The links are displayed using Table. User can delete the table content using remove button.
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"35px"}} href="https://github.com/Ala123Sobhan/favLinks" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    
                   
                 </CardActions>
                 
               </Card>

               <Card shadow={5} style={{minWidth:"450", margin:"auto", height:"100%"}}>
                   <CardTitle style={{color: "#1C2331", height:"300px", fontWeight:"bolder", background:'url(https://www.flaticon.com/svg/static/icons/svg/1158/1158164.svg) center / cover'}}>
                   </CardTitle>
                   <CardText style={{height:"150px",textAlign:"justify"}}>
                     <h5  style={{color:"#2e3951"}}>Design Pad</h5>
                    A React App where user can drag  and drop colors and design the pad as per his will .
                    User can reset the design of the design pad to get back to the intial state.
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"35px"}} href="https://github.com/Ala123Sobhan/design-pad/tree/development" rel="noopener noreferrer" target="_blank">Github</a></Button>
                 </CardActions>
                 
               </Card>

               <Card shadow={5} style={{minWidth:"450", margin:"auto", height:"100%"}}>
                   <CardTitle style={{color: "#1C2331", height:"300px", fontWeight:"bolder", background:'url(https://www.flaticon.com/svg/static/icons/svg/1163/1163661.svg) center / cover'}}>
                   </CardTitle>
                   <CardText style={{height:"150px",textAlign:"justify"}}>
                     <h5  style={{color:"#2e3951"}}>Weather App</h5>
                    A React App where user can select a particular place from a drop down list of cities and countries and retrieve weather information about that particular place.
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"35px"}} href="https://github.com/Ala123Sobhan/Weather-App" rel="noopener noreferrer" target="_blank">Github</a></Button>
                 </CardActions>
                 
               </Card>
               
            </div>)
        }
            else if(this.state.activeTab === 3)
            {
                return (<div className="project-grid">
                     <Card shadow={5} style={{minWidth:"450", margin:"auto", height:"100%"}}>
                   <CardTitle style={{color:"#fff", height:"300px", background:'url(https://img.icons8.com/plasticine/2x/bento.png) center / cover'}}>
                   </CardTitle>
                   <CardText style={{height:"150px",textAlign:"justify"}}>
                     <h5 style={{color:"#2e3951"}}>Cuisines</h5>
                    A multiple page website about diverse and delicious 5 cuisines that one must try. 
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"35px"}} href="https://github.com/Ala123Sobhan/Cuisines" rel="noopener noreferrer" target="_blank">Github</a></Button>
                 </CardActions>
                 
               </Card>

               <Card shadow={5} style={{minWidth:"450", margin:"auto", height:"100%"}}>
                   <CardTitle style={{color:"#fff", height:"300px", background:'url(https://img.freepik.com/free-photo/flag-bangladesh_1401-65.jpg?size=626&ext=jpg) center / cover'}}>
                   </CardTitle>
                   <CardText style={{height:"150px",textAlign:"justify"}} >
                     <h5 style={{color:"#2e3951"}}>Bangladesh</h5>
                    A website about colorful and beautiful culture of Bangladesh and its tourist attractions. 
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"35px"}} href="https://github.com/Ala123Sobhan/Bangladesh" rel="noopener noreferrer" target="_blank">Github</a></Button>
                 </CardActions>
                 
               </Card>

               <Card shadow={5} style={{minWidth:"450", margin:"auto", height:"100%"}}>
                   <CardTitle style={{color:"#fff", height:"300px", background:'url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcNBwcNDQcHBw0HBg0HBwgHBw8ICQgNFREWFiAREx8YHCggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0NFQ8NFSsZFRkrKy03NysrKysrKysrKysrKy0tKysrKysrNysrKysrKysrKysrNysrKysrKys3KystN//AABEIAKgBLAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EABUQAQEAAAAAAAAAAAAAAAAAAAAR/8QAGgEBAQADAQEAAAAAAAAAAAAAAwIBBgcABP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAwDAQACEQMRAD8A8CKNmS+4bKiISQbQioSUaqyo0kG0Io0lGqsqNJRqqA0kG0Io0kGKgmsagJSsYAlKhqIqaxgCUqGAISsaI0g0rGyjSCSQbIqCSsaI0g0kGyKQSVjZAdAS52MRRKSDZURCSDaEVCSjVWVGkg2hFGko1VlRpINVQGko2hFGkgxUE1jUBKVjAEpUNRFTWMASlQwBCVjRGkGlY2UaQSSDZFQSVjQVBpINlFG/Jc6GgCEkGIolJBsqIhJBtCCElG0rKjSQbQijSUaqyo0kGqoDSUbQijSQYqCaxqAlKxgCUqGoiprGAJSoYAhKxojSDSsbKNIJJBsjSDSsbCKN7S5yNEUSko0AQkgxFEpINlREpINVQGko2lZUaSDaEUaSjVWVGkg1VAaSjaEUaSDFQTWNQEpWMASlQ1EVNYwBKVDAEJWNEaQaVjZFQSSDcwG8pc4GIolJBoiiUlGgCEkGIolJBsqIlJBqqA0lG0rKjSQbQijSUaqyo0kGqoDSUbQijSQYqCaxqAlKxgCUqGoiprGAJSoYAhKxojSDSsbkijdrnI0ASlYxFEpINEUSko0AQkgxFEpINlREpINVQGko2lZUaSDaEUaSjVWVGkg1VAaSjaEUaSDFQTWNQEpWMASlQ1EVNYwBKVDAEJWNxAbnc5GIoxWNAEpWMRRKSDRFEpKNAEJIMRRKSDZURKSDVUBpKNpWVGkg2hFGko1VlRpINVQGko2hFGkgxUE1jUBKVjAEpUNRFTWMBU5UNwAbhc6GAPVDEUYrGgCUrGIolJBoiiUlGgCEkGIolJBsqIlJBqqA0lG0rKjSQbQijSUaqyo0kGqoDSUbQijSQYqCaxqAlKxgCUqGoiprG4gNvudDAGKhgD1QxFGKxoAlKxiKJSQaIolJRoAhJBiKJSQbKiJSQaqgNJRtKyo0kG0Io0lGoijSQaqyo0lG0Io0kGKgmsagJSsYAnKhuQDbrnYwBioYA9UMAYqGIoxWNAEpWMRRKSDRFEpKNAEJIMRRKSDZURKSDVUBpKNpWVGkg2hFGko1EUaSDVWVGko2hFGkgxUE1jUBNY3NAbbc7IAxUQBiogDFRAHqyIoxUUASyERRLINEBDIMASyDEBLIUUEMoxQQyDVQEko1AGyFVQGko1UBpINQBspFBiq//9k=) center / cover'}}>
                   </CardTitle>
                   <CardText style={{height:"150px",textAlign:"justify"}}>
                     <h5 style={{color:"#2e3951"}}>Background Generator</h5>
                     A website for linear gradient background generator. 
                   </CardText>
                <CardActions>
                    <Button colored><a style={{textDecoration:"none", color:"royalblue", padding:"35px"}} href="https://github.com/Ala123Sobhan/background-generator" rel="noopener noreferrer" target="_blank">Github</a></Button>
                 </CardActions>
              
               </Card>

                </div>)
            }
        
    }
    
    render() {
        return (
            <div>    
         <div >
             <Tabs  style={{padding:"8px"}}activeTab={this.state.activeTab} onChange={(tabId) =>this.setState({activeTab: tabId})} ripple> 
              <Tab className ="tab-design"style={{fontFamily:"Sofia", color:"white", marginRight:"10px"}}>Java</Tab>
              <Tab className ="tab-design"style={{fontFamily:"Sofia", color:"white", marginRight:"10px"}}>Javascript</Tab>
              <Tab className ="tab-design"style={{fontFamily:"Sofia", color:"white", marginRight:"10px"}}>React</Tab>
              <Tab className ="tab-design"style={{fontFamily:"Sofia", color:"white", marginRight:"10px"}}>HTML,CSS</Tab>
             </Tabs>

       </div>
         <div >
         {this.changeTabs()} 
         </div>
        
        </div>
        )
    }
}

export default Projects