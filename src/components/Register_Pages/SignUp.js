import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignUp extends Component {
  constructor(props) {
    super(props); 
     this.onTesdiq=this.onTesdiq.bind(this);

  };

  onTesdiq=(e)=>{
    e.preventDefault();
    
};
render(){
  return (
    <div className="signin">
    <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
          <div className="card">
            <div className="card-header">
              <h3>Register</h3>
              <div className="d-flex justify-content-end social_icon">
                <span><i className="fab fa-facebook-square" /></span>
                <span><i className="fab fa-google-plus-square" /></span>
                <span><i className="fab fa-twitter-square" /></span>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={this.onTesdiq}>
                <div className="input-group form-group" >
                    <span className="input-group-text"><i className="fas fa-user" /></span>
                   <input type="text" name='fname' id='fname' className="form-control" placeholder="First-Name" required />
                </div>
                <div className="input-group form-group">
                    <span className="input-group-text"><i className="fas fa-user" /></span>
                   <input type="text" name='lname' id='lname' className="form-control" placeholder="Last-Name" required />
                </div>
                <div className="input-group form-group">
                    <span className="input-group-text"><i className="fas fa-user" /></span>
                   <input type="text" name='usname' id='usname' className="form-control" placeholder="Username" required />
                </div>
                <div className="input-group form-group">
                  
                    <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
                  
                  <input type="email"  id="email" name="email" className="form-control" placeholder="E-mail"  required/>
                </div>
                <div className="input-group form-group">
                  
                    <span className="input-group-text"><i className="fas fa-key" /></span>
                  
                  <input type="password" name='pssw' id='pssw' className="form-control" placeholder="Password"  required/>
                </div>
                <div className="input-group form-group">
                  
                    <span className="input-group-text"><i className="fas fa-key" /></span>
                  
                  <input type="password" name='repw' id='repw' className="form-control" placeholder="Retype Password"  required/>
                </div>
                <div className="remember">
                  <input type="checkbox" required />Remember Me
                </div>
                <div className="remember">
                  <input type="checkbox" required />Accept rules and conditions!
                </div>
                <div className="form-group">
                  <input type="submit" defaultValue="Login" className="btn  login_btn" />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                 <Link to ="/signin">Already have an account?</Link>
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

export default SignUp