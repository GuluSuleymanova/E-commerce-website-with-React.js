import { Alert } from 'bootstrap';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignIn extends Component {
  constructor(props) {
    super(props); 
     this.onTesdiq=this.onTesdiq.bind(this);
     this.handleChange=this.handleChange.bind(this);
     this.state={text:'',pssw:''};

  };

  onTesdiq=(e)=>{
    e.preventDefault();
    
     alert('Your username is: '+this.state.text +'\nYour password is: '+this.state.pssw);
};

handleChange=(e)=>{
  const name=e.target.name;
  this.setState({
    [name]:e.target.value
  });
}
  render(){
  return (
    <div className="signin">
    <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">

          <div className="card">
            <div className="card-header">
              <h3>Sign In</h3>
              <div className="d-flex justify-content-end social_icon">
                <span><i className="fab fa-facebook-square" /></span>
                <span><i className="fab fa-google-plus-square" /></span>
                <span><i className="fab fa-twitter-square" /></span>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={this.onTesdiq}>
                <div className="input-group form-group">
                    <span className="input-group-text"><i className="fas fa-user" /></span>
                   <input
                   
                   onChange={this.handleChange}
                   
                   type="text" name='text' id='text' className="form-control" placeholder="username" required 
              
                   />
                </div>
                <div className="input-group form-group">
                  
                    <span className="input-group-text"><i className="fas fa-key" /></span>
                  
                  <input
                   onChange={this.handleChange}
                    type="password" name='pssw' id='pssw' className="form-control" placeholder="password"  required/>
                </div>
                <div className="remember">
                  <input type="checkbox" required />Remember Me
                </div>
                <div className="form-group">
                  <input type="submit" defaultValue="Login" className="btn  login_btn" />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account? <Link to ="/signup">Sign Up</Link>
              </div>
              <div className="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}
}

export default SignIn