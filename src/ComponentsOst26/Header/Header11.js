import React from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

class Header extends React.Component{
    render(){
        return (
            
            <section id="header">
                <nav className="navbar">
                    <Link className="navbar__logo" to='/'>Obsloan</Link>
                    
                    <ul className="navbar__list ">
                        <li className="navbar__item active">
                            <Link className="navbar__link" to='/'>Home</Link>
                        </li>
                        <li className="navbar__item active">
                            <Link className="navbar__link" to='/movies'>Products</Link>
                        </li>
                        <li className="navbar__item navbar__item--dropdown" id="our-offerings">
                            <Link className="navbar__link" to='/movies/create'>Add a Movie</Link>

                            <ul className="navbar__list--sub" data-nav-dropdown="our-offerings">
                                <li className="navbar__sub--item">
                                    <div className="navbar__sub--icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12.145" height="17.069" viewBox="0 0 12.145 17.069"><g transform="translate(0 0)"><path d="M19.739,9.156a6.08,6.08,0,0,0-12.145,0,5.6,5.6,0,0,0,1.239,3.287H8.821c.447.615.878.726,1.292,1.436a4.6,4.6,0,0,1,.767,2.285.658.658,0,0,0,.656.628H11.9a.165.165,0,0,0,.164-.164V12.751a1.327,1.327,0,0,0-.14-.587l-.862-1.723a.431.431,0,0,1,.386-.624h0a.427.427,0,0,1,.386.242l1.038,2.109a1.289,1.289,0,0,1,.135.579v3.882a.165.165,0,0,0,.164.164h.985a.165.165,0,0,0,.164-.164V12.746a1.289,1.289,0,0,1,.135-.579L15.5,10.051a.415.415,0,0,1,.369-.23h0a.413.413,0,0,1,.369.6l-.874,1.748a1.34,1.34,0,0,0-.14.587v3.873a.165.165,0,0,0,.164.164h.41a.656.656,0,0,0,.656-.615,4.929,4.929,0,0,1,.755-2.3c.414-.71.845-.821,1.292-1.436h0A5.6,5.6,0,0,0,19.739,9.156Z" transform="translate(-7.594 -3.375)" fill="#fff"/><path d="M16.324,31.805H17.8a.576.576,0,0,0,.574-.574h0a.576.576,0,0,0-.574-.574H16.324a.576.576,0,0,0-.574.574h0A.576.576,0,0,0,16.324,31.805Z" transform="translate(-10.99 -14.736)" fill="#fff"/><path d="M14.918,28.711h3.118a.576.576,0,0,0,.574-.574h0a.576.576,0,0,0-.574-.574H14.918a.576.576,0,0,0-.574.574h0A.576.576,0,0,0,14.918,28.711Z" transform="translate(-10.405 -13.448)" fill="#fff"/></g></svg>
                                    </div>
                                    <a className="navbar__link" href="/coming-soon.html">Solutions</a>
                                </li>

                                <li className="navbar__sub--item">
                                    <div className="navbar__sub--icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15.224" height="14.462" viewBox="0 0 15.224 14.462"><path d="M16.7,6.045H13.657V4.522A1.517,1.517,0,0,0,12.134,3H9.089A1.517,1.517,0,0,0,7.567,4.522V6.045H4.522A1.511,1.511,0,0,0,3.008,7.567L3,15.94a1.517,1.517,0,0,0,1.522,1.522H16.7a1.517,1.517,0,0,0,1.522-1.522V7.567A1.517,1.517,0,0,0,16.7,6.045Zm-4.567,0H9.089V4.522h3.045Z" transform="translate(-3 -3)" fill="#fff"/></svg>
                                    </div>
                                    <a className="navbar__link" href="/coming-soon.html">Services</a>
                                </li>

                                <li className="navbar__sub--item">
                                    <div className="navbar__sub--icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13.084" height="14.954" viewBox="0 0 13.084 14.954"><path d="M12.734,14.019H12.15V.7a.7.7,0,0,0-.7-.7H1.636a.7.7,0,0,0-.7.7V14.019H.35a.35.35,0,0,0-.35.35v.584H13.084v-.584A.35.35,0,0,0,12.734,14.019Zm-9-11.8a.35.35,0,0,1,.35-.35H5.257a.35.35,0,0,1,.35.35V3.388a.35.35,0,0,1-.35.35H4.089a.35.35,0,0,1-.35-.35Zm0,2.8a.35.35,0,0,1,.35-.35H5.257a.35.35,0,0,1,.35.35V6.192a.35.35,0,0,1-.35.35H4.089a.35.35,0,0,1-.35-.35ZM5.257,9.346H4.089A.35.35,0,0,1,3.738,9V7.827a.35.35,0,0,1,.35-.35H5.257a.35.35,0,0,1,.35.35V9A.35.35,0,0,1,5.257,9.346Zm2.22,4.673H5.608V11.566a.35.35,0,0,1,.35-.35H7.126a.35.35,0,0,1,.35.35ZM9.346,9a.35.35,0,0,1-.35.35H7.827A.35.35,0,0,1,7.477,9V7.827a.35.35,0,0,1,.35-.35H9a.35.35,0,0,1,.35.35Zm0-2.8a.35.35,0,0,1-.35.35H7.827a.35.35,0,0,1-.35-.35V5.023a.35.35,0,0,1,.35-.35H9a.35.35,0,0,1,.35.35Zm0-2.8a.35.35,0,0,1-.35.35H7.827a.35.35,0,0,1-.35-.35V2.22a.35.35,0,0,1,.35-.35H9a.35.35,0,0,1,.35.35Z" fill="#fff"/></svg>
                                    </div>
                                    <a className="navbar__link" href="/coming-soon.html">Industry</a>
                                </li>
                            </ul>
                        </li>
                        
                        
                    </ul>
                
                </nav>
                
            </section>
        )
    }
}

export default Header;