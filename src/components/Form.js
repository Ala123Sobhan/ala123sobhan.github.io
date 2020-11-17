import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import apiKeys from '../apikeys'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
 class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             email:"",
             message:""
        }
    }
    
    handleChange = (event) => {
        this.setState(
          {
            [event.target.name]: event.target.value,
          }
          
        );
    
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.message);

      };

      sendEmail = (e) => {
       
       // alert("In form submit")
        e.preventDefault();
        
        const MySwal = withReactContent(Swal)
       
        const name = this.state.name;
        const email = this.state.email;
        const message = this.state.message;
        
      

        let success = false;
        if (name !== "" && email !== "" && message !== "" ) {
          success = true;
          
          console.log(name);
          console.log(email);

          emailjs.sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
          .then(result => {
         // alert('Dear '+name+ ', message is sent, Ala Sobhan will get back to you shortly', result.text);
         MySwal.fire({
          title: 'Dear '+name+ ', message is sent, Ala Sobhan will get back to you shortly' ,
          icon: 'success',
           showClass: {
              popup: 'animate__animated animate__fadeInDown'
               },
          hideClass: {
             popup: 'animate__animated animate__fadeOutUp'
          }
        })
          },
          error => {
          //alert( 'An error occured, Plese try again',error.text)
          MySwal.fire({
            title: 'An error occured, Plese try again' ,
            icon: 'success',
             showClass: {
                popup: 'animate__animated animate__fadeInDown'
                 },
            hideClass: {
               popup: 'animate__animated animate__fadeOutUp'
            }
          })
          })
          
          
         
        } else {
          if (!success) {
            //alert("name, email and message required!");
            MySwal.fire({
              title: 'Name, Email and Message required!' ,
              icon: 'error',
               showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                   },
              hideClass: {
                 popup: 'animate__animated animate__fadeOutUp'
              }
            })
          }
        }
        success &&
          this.setState(
            {
              name: "",
              email: "",
              message:""
            }
            
          );
       
      };
    render() {
        return (
            <div className="form-design">
                <form onSubmit={this.sendEmail}>
                <label style={{fontFamily:"Sofia", color:"white", fontSize:"30px",marginLeft:"-140px"}}>Name</label>
                <br/>
                <input style={{width:"30%"}}
                 className="input-design"
                 type="text"
                 name="name"
                 onChange={this.handleChange}
                 value={this.state.name} placeholder="Your name..."/>
                 <br/><br/>

                <label style={{fontFamily:"Sofia", color:"white", fontSize:"30px",marginLeft:"-140px"}}>Email</label>
                <br/>
                <input style={{width:"30%"}}
                className="input-design"
                type="text"
                name="email"
                onChange={this.handleChange}
                value={this.state.email} placeholder="Your email..."/>
               <br/><br/>

               <label style={{fontFamily:"Sofia", color:"white", fontSize:"30px",marginLeft:"-110px"}}>Message</label>
               <br/>
               <textarea style={{width:"30%",height:"80%"}} 
                className="input-design"
                type="text"
                name="message"
                onChange={this.handleChange}
                value={this.state.message}
                placeholder="Write something..."
               /> 
              <br/><br/>
                
              <input type="submit" value="Send" style={{textAlign:"center", fontFamily:"Sofia", fontSize:"bold"}} className="form-btn" />
                </form>
               
               {/*<button style={{textAlign:"center", fontFamily:"Sofia", fontSize:"bold"}} className="form-btn" onClick={this.handleSubmit}>Send</button> */}
            </div>
        )
    }
}

export default Form
