import React from "react";


class SignIn extends React.Component{

    constructor(props){
        super(props)

        this.state={
            email:"",
            password:""
        }


    }
    handleSubmit = event=>{
        event.preventDefault();

        this.setState({email:"",password:""})
    }
    handleChange = event=>{
        const {value,name}= event.target;


        this.setState({[name]:value})

        
    }

    render(){
        return(
           <div className="sign-in">

                <h2>I have already acount</h2>
                <span>Sign in with your email and password </span>


                <form onSubmit={this.handleSubmit}>
                    <input name="email" type = "email"value={this.state.email} required ></input>
                    <label >Email</label>
                    <input name="password" type="password" value={this.state.email}
                    onChange={this.handleChange}
                    required ></input>
                    <label >password</label>


                    <input type="submit" value="Submit Form" />



                </form>

           </div>
            
        )
    }
 


}
export default SignIn