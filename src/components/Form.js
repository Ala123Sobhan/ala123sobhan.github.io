import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             email:"",
             msg:""
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
        console.log(this.state.msg);

      };
      onFormSubmit = (event) => {
      
        event.preventDefault();
    
       // const { handleSubmit } = this.props;
        const name = this.state.name;
        const email = this.state.email;
        const msg = this.state.msg;
       
        let success = false;
        if (name !== "" && email !== "" && msg !== "" ) {
          success = true;
          
          alert("Hey, "+name+" your message sent successfully!");
        } else {
          if (name === "" && email === "" && msg === "") {
            alert("name,email and message required!");
          } else if (name === "" && email !== "" && msg !== "") {
            alert("name is required!");
          } else if (email === "" && name !== "" && msg !== "") {
            alert(" email is required!");
          }
          else if (msg === "" && name !== "" && email !== "") {
            alert(" message is required!");
          }
        }
        success &&
          this.setState(
            {
              name: "",
              email: "",
              msg:""
            }
            
          );
        console.log(this.state.name + " " + this.state.email);
      };
    render() {
        return (
            <div>
                <form>
                <label style={{fontFamily:"Sofia", color:"white", fontSize:"30px", paddingRight:"70px"}}>Name</label>
                <input style={{width:"25%"}}
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}/>
             <br/><br/>

              <label style={{fontFamily:"Sofia", color:"white", fontSize:"30px", paddingRight:"75px"}}>Email</label>
              <input style={{width:"25%"}}
               type="text"
               name="email"
               onChange={this.handleChange}
               value={this.state.email}/>
               <br/><br/>

              <label style={{fontFamily:"Sofia", color:"white", fontSize:"30px", paddingRight:"30px"}}>Message</label>
              <textarea style={{width:"25%",height:"75%"}} 
               type="text"
               name="msg"
               onChange={this.handleChange}
               value={this.state.msg}
               
          /> 
              <br/><br/>

                </form>
                <button style={{textAlign:"center", fontFamily:"Sofia", fontSize:"bold"}} className="form-btn" onClick={this.onFormSubmit}>Submit</button>
                
            </div>
        )
    }
}

export default Form
