import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './assets/sass/style.css';
import AppRouter from './components/routers/AppRouter';
import BackToTopButton from './components/BackToTopButton'
const App =()=>{
    return(
        <div>
        <AppRouter/>
        <BackToTopButton/>
        </div>
    )
}

 

ReactDOM.render(<App/>,document.getElementById('root')
);


