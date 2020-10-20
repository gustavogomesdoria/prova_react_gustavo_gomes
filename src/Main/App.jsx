
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'; 
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import Routes from './Routes';
import './App.css';
import Footer from '../Templates/Footer';
import Menu from '../Templates/Menu';


export default props => (
    <div className="container">
       <>
       <Menu />
       <Routes />,
       <Footer />
       </>
    </div>
)
    