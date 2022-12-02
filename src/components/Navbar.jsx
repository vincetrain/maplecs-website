import { useState, useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
    const [sticky, setSticky] = useState('relative');

    const handleScroll = () => {
        const position = window.pageYOffset;

        if (position > 15) {
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
                <Link to='/'>Home</Link>
                <span className='navbar-divider'/>
                <Link to='coding101'>Coding 101</Link>
                <span className='navbar-divider'/>
                <Link to='gamedev'>Game Development</Link>
                <span className='navbar-divider'/>
                <Link to='ethicalhacking'>Ethical Hacking</Link>
                <span className='navbar-divider'/>
                <Link to='other'>Other</Link>
            </ul>
        </div>
    )
}

export default Navbar;