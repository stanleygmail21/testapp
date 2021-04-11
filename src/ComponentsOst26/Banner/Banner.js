import React from 'react';
import './Banner.css';

class Banner extends React.Component{
    render(){
        return (
            <div className="banner">
                <div className="banner__overlay"></div>
                <img className="banner__overlay--image" alt="banner" src={process.env.PUBLIC_URL + 'images/layout/hero_img.jpg' } />
                
                <div className="banner__overlay--text">
                    <h1 className="banner__overlay--header">OBIKA STANLEY OST 26</h1>
                    <h1 className="banner__overlay--header">Welcome to Obslend</h1>
                </div>
            </div>
        )
    }
}

export default Banner;