import React,{Component} from 'react';

import '../assets/css/base.css'
import '../library/font.js'

import Header from './Header';
import Footer from './Footer'
import Home from '../pages/Home'

export default class App extends Component{
    render(){
        return(
            <div id="App">
                <Header/>
                <Home/>
                <Footer/>
            </div>
        )
    }
}