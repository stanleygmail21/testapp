import React, { useState, useEffect } from "react";
import './Header.css';

import { Link } from 'react-router-dom';
import {DropdownButton } from 'react-bootstrap';

import SearchIcon from '../icons/SearchIcon';
import { 
    FaHome,
    FaPowerOff,
} from "react-icons/fa";
import history from '../functions/history';
import { getMe } from '../../Services/userService';
import { getProducts } from '../../Services/productService';

const Header = props => {

    const [user, setUser] = useState(null);
    const [visible, setVisible] = useState('none');
    const [searchTerm, setSearchTerm] = useState(null);
    const [products, setProducts] = useState(null);


    useEffect(() => {
        const token = sessionStorage.getItem('auth');
        if(!token){
            history.push('/login');
        }else{
            getCurrentUser();
        }        
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    const getCurrentUser = async () => {
        getMe().then(response => {
            // set current user to the fetched user
            setUser(response.data.data);
            props.getUser(response.data.data)
        }).catch(error => {
            sessionStorage.removeItem('auth');
            history.push('/login')
        })
        
    }

    const Onlogout = props => {
        sessionStorage.removeItem('auth');
        history.push('/login'); 
    }

    const displaySigninBtns = () => {
        
        if(user && Object.keys(user).length !== 0){

            return (
                

<DropdownButton id="dropdown-basic-button" title={`${user.name}`} >
    

    <li className="navbar__dropdown--item">
        {/* {user.role === 'lender' && <Link to={`/lender/dashboard`} className="navbar__dropdown--link mb-0 d-flex"> */}
        {user.role && <Link to={`/${user.role}/dashboard`} className="navbar__dropdown--link mb-0 d-flex">
            <div className="mr-sm"><FaHome/></div>
            <span>Dashboard</span>
        </Link>}
    </li>
    
    <li onClick={Onlogout} className="navbar__dropdown--item">
        <Link to="#" className="navbar__dropdown--link mb-0 d-flex">
            <div className="mr-sm"><FaPowerOff/></div>
            <span>Logout</span>
        </Link>
    </li>
  
</DropdownButton>
               
            )
        }

        return (
            <React.Fragment>
                <Link to="/register" className="mg btn__simple btn__round">Sign up</Link>
                <Link to="/login" className="mg btn__simple btn__round btn__hollow">Log in</Link>
            </React.Fragment>
        )
    }

    const onSearch = async(e) => {
        setSearchTerm(e.target.value);
        setVisible('block')        
        getProducts().then(response => {
            const products = response.data.data;
            let newProducts = [];
            if(products){
                newProducts = products.filter(cur => {
                    if(cur.name.includes(e.target.value)){
                        return cur
                    }
                    return '';
                })
            }
            setProducts(newProducts)
        })
        
    }

    const displaySearchResult = () => {
        if(products && products.length !== 0){
            return products.map(product => {
                return (
                    <Link to={`/shop/${product._id}`} className="search__result card">
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                    </Link>
                )
            })
        }
        else{
            return(
                <div className="search__result card" style={{display: `${visible}`}}>No result</div>
            )
        }
    }
    

    return(
        <section id="header"  >
            <div id="container" className="container">
                <div className="navbar">
                    <Link to="/" className="logo">OBS LEND</Link>

                    <div className="search__container">
                        <input type="text" onChange={onSearch} name="search" id="search" placeholder="Search products" autoComplete="off" />
                        <SearchIcon />
                        {displaySearchResult()}

                    </div>
                    
                    <div className="icons">
                        
                        
                        
                        {displaySigninBtns()}
                        
                    </div>
                    
                    
                    
                </div>
            </div>
        </section>
    )

}

export default Header;