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
            alert("name, email and message required!");
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
       // console.log(this.state.name + " " + this.state.email);
      };
    render() {
        return (
            <div className="form-design">
                <form>
                <label style={{fontFamily:"Sofia", color:"white", fontSize:"30px",marginLeft:"-140px"}}>Name</label>
                <br/>
                <input style={{width:"30%"}}
                 type="text"
                 name="name"
                 onChange={this.handleChange}
                 value={this.state.name}/>
                 <br/><br/>

                <label style={{fontFamily:"Sofia", color:"white", fontSize:"30px",marginLeft:"-140px"}}>Email</label>
                <br/>
                <input style={{width:"30%"}}
                type="text"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}/>
               <br/><br/>

               <label style={{fontFamily:"Sofia", color:"white", fontSize:"30px",marginLeft:"-110px"}}>Message</label>
               <br/>
               <textarea style={{width:"30%",height:"80%"}} 
                type="text"
                name="msg"
                onChange={this.handleChange}
                value={this.state.msg}
               /> 
              <br/><br/>

                </form>
                <button style={{textAlign:"center", fontFamily:"Sofia", fontSize:"bold"}} className="form-btn" onClick={this.onFormSubmit}>Send</button>
                
            </div>
        )
    }
}

export default Form
