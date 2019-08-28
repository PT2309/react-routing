import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    // setTimeout(()=>{
    //     props.history.push('/');
    // }, 5000)
    return(
        <nav className="nav-wrapper blue darken-4">
            <div className='container'>
                <a href="/" className="brand-logo left">Brandstand</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);