import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {signout} from '../api';

const Navbar = ({history}) => (
    <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>
                    Cindy's Creations
                </Link>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarToggler' aria-controls='navbarToggler' aria-expanded='false' aria-label='Toggle Navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarToggler'>
                    <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/'>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/signup'>
                                Sign Up
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/signin'>
                                Sign In
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <span className='nav-link' style={{cursor: 'pointer'}} onClick={() => signout(() => {})}>
                                Sign Out
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

export default withRouter(Navbar);