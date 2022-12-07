import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
    const [sticky, setSticky] = useState('relative');

    const handleScroll = () => {
        let position = window.pageYOffset;
        console.log('worked: ' + position);
        if (position > 1) {
            setSticky('sticky');
        }
        else {
            setSticky('relative');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar ${sticky}`}>
            <div className='navbar-brand'>
                <Link to='/'>
                    <img alt='' />
                    Maple Computer Science 2023
                </Link>
            </div>
            <ul classname='navbar-list'>
                <NavLink exact={true} to='/' activeClassName='active'>Home</NavLink>
                <span className='navbar-divider'/>
                <NavLink exact={true} to='/coding101' activeClassName='active'>Coding 101</NavLink>
                <span className='navbar-divider' />
                <NavLink exact={true} to='/gamedev' activeClassName='active'>Game Development</NavLink>
                <span className='navbar-divider' />
                <NavLink exact={true} to='/ethicalhacking' activeClassName='active'>Ethical Hacking</NavLink>
                <span className='navbar-divider' />
                <NavLink exact={true} to='/other' activeClassName='active'>Other</NavLink>
            </ul>
        </div>
    )
}

export default Navbar;