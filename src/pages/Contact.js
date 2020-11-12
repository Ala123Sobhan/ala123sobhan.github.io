import React from 'react'
import {List, ListItem, ListItemContent, Grid, Cell} from "react-mdl"
function Contact() {
    return (
        <div>
            <h1 className="contact"style={{fontFamily:"Sofia",color:"white", paddingBottom:"20px"}}>Contact Information</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
             <div className="contact-body">
                 <Grid className="contact-grid">
                     <Cell col={6}>
                     <h3  style={{fontFamily:"Sofia", color:"white"}}>Contact Form</h3>
                     <hr style={{borderTop:"5px dotted white", width: "50%", margin:"auto"}}/>
                     
                     </Cell>

                     <Cell col={6}>
                         <h3 style={{fontFamily:"Sofia", color:"white"}}>My Contact Information</h3>
                         <hr style={{borderTop:"5px dotted white", width: "50%", margin:"auto"}}/>
                         <div className="contact-list">
                         <List>
                          <ListItem>
                          <ListItemContent style={{fontSize:"20px", fontFamily:"Sofia",color:"white"}}>
                               <i className="fa fa-phone-square" aria-hidden="true"/>
                                 < span className ="linkedln">(718) 822-0314 </span>
                              </ListItemContent>
                          </ListItem>

                          <ListItem>
                          <ListItemContent style={{fontSize:"20px", fontFamily:"Sofia",color:"white"}}>
                               <i className="fa fa-linkedin-square" aria-hidden="true"/>
                               <a className ="linkedln" style={{textDecoration:"none",color:"white"}}href="https://www.linkedin.com/in/ala-sobhan-892b9017a/" rel="noopener noreferrer" target="_blank">
                                LinkedIn
                               </a>
                              </ListItemContent>
                          </ListItem>
                          
                          <ListItem>
                          <ListItemContent style={{fontSize:"20px", fontFamily:"Sofia",color:"white"}}>
                               <i className="fa fa-envelope" aria-hidden="true"/>
                               <a className ="linkedln" style={{textDecoration:"none",color:"white"}} href="mailto:ala123sobhan@gmail.com" rel="noopener noreferrer" target="_blank">
                                ala123sobhan@gmail.com
                               </a>
                              </ListItemContent>
                          </ListItem>


                        </List>
                        </div>
                     </Cell>

                 </Grid>

             </div>
          
        </div>
    )
}

export default Contact
