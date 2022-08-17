import React,{useEffect, Suspense, useState} from 'react'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import Header from '../Header'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Collections from '../pages/Collections'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Aos from "aos";
import "aos/dist/aos.css";
import '../../i18n';
import { Rings} from "react-loader-spinner"; //react-loader-spiner yukle
import Footer from '../Footer'
import { CartProvider } from 'react-use-cart'
import Cart from '../pages/Cart'
import SignIn from '../Register_Pages/SignIn'
import SignUp from '../Register_Pages/SignUp'
import ScrollToTop from '../ScrollTop'

const AppRouter = () => {
  useEffect(() => {
    Aos.init({ duration: 3000});
  }, []);

  const [loading,setLoading]=useState(false);// sonra usestate islet

  useEffect(() => {  //ardiyca useeffect
   setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  }, [])
  

  return (
    <div className="approuter">
   {loading ? (
        <div className="load">
          <Rings
            height="300"
            width="300"
            color= "#e0aa3e"
            ariaLabel="loading"
          />
        </div>
      ) : (

      <div>
      <Suspense fallback={(<div>Loading</div>)}>
      <Router>
      <ScrollToTop/>
    <Switch>
     <CartProvider>
        <Header/>
      <Route exact path='/' component={Home}></Route>
      <Route  path='/shop' component={Shop}></Route>
      <Route  path='/collection' component={Collections}></Route>
      <Route  path='/blog' component={Blog}></Route>
      <Route  path='/about' component={About}></Route>
      <Route  path='/contact' component={Contact}></Route>
      <Route  path='/cart' component ={Cart}></Route> 
      <Route  path ='/signin' component={SignIn}></Route>
      <Route  path ='/signup' component={SignUp}></Route>
    </CartProvider>
    </Switch>
      <Footer/>
    </Router>
      </Suspense>
      </div>
      )}
    </div>
    
  )
}

export default AppRouter