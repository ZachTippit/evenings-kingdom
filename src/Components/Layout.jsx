import React, {useEffect} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {

    const location = useLocation();

    useEffect(() => {
    }, [location.pathname])

    return (
        <div style={{width: '100%'}}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout