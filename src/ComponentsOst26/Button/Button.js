import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';


class Button extends React.Component{
    render(){
        return <Link className='btn' to="/movies">Browse Our Movies</Link>
    }
}

export default Button;