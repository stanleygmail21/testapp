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
    const [products, setProducts] = useState(null);


    useEffect(() => {
        const token = sessionStorage.getItem('auth');
        if(token){
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
    

    <li className="navbar__dropdown--item" key="dashboard">
        {/* {user.role === 'lender' && <Link to={`/lender/dashboard`} className="navbar__dropdown--link mb-0 d-flex"> */}
        {user.role && <Link to={`/${user.role}/dashboard`} className="navbar__dropdown--link mb-0 d-flex">
            <div className="mr-sm"><FaHome/></div>
            <span>Dashboard</span>
        </Link>}
    </li>
    
    <li onClick={Onlogout} className="navbar__dropdown--item" key="logout">
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
        const searchResults = []
        const count=1;
        if(products && products.length !== 0){
            products.map((product, index) => {
                return searchResults.push(
                    <li key={index} className='search__item' >
                        <Link to={`/shop/${product._id}`} key={product._id} className="search__link d-flex justify-content-between pt-4 pb-4" >
                            <div key={product.name}>{product.name}</div>
                            <div key={product.price}>${product.price}</div>
                        </Link>
                    </li>
                )
            })
        }
        else{
            searchResults.push(
                <div key={count}>No result</div>
            )
        }
        return searchResults;
    }

    const searchDOM = React.useRef(null);


      const handleClickOutside = event => {
        if (document.activeElement && document.activeElement !== searchDOM.current) {
            setVisible(false)
        }
      };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    }, [])


    return(
        <section id="header"  >
            <div id="container" className="container">
                <div className="navbar">
                    <Link to="/" className="logo">OBS LEND</Link>

                    <div className="search__container">
                        <input ref={searchDOM} type="text" onChange={onSearch} name="search" id="search" placeholder="Search products" autoComplete="off" />
                        <SearchIcon />
                        <ul className='search__result card' style={{display: visible}}>
                            {displaySearchResult()}
                        </ul>

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