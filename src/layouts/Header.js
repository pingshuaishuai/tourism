import React from 'react';

import '../assets/css/header.css'

// import '../assets/images/menu.png'

export default class Header extends React.Component{
    render(){
        return (
            <div id="header">
                <a href="javascript:;" className="logo">旅游网站</a>
                <div className="menu">
                </div>
            </div>
        )
    }
}
