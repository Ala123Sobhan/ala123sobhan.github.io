import React from 'react'
import {Grid, Cell} from 'react-mdl'
import Ala from "./Ala_Img.JPG"

function Home() {
    return (
        <div style={{width:'100%', margin:'auto'}}>
            <Grid className="body">

              <Cell col={12}>
               <img src={Ala} alt="Ala" className="myImg"/>

                <div className="heading-text">
                <h1>Ala Sobhan</h1>
                <p>
                 Currently an aspiring computer science student in NYC.
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

              </Cell>

             
            </Grid>
         
        </div>
    )
}

export default Home
