import React from 'react'
import logo from '../assests/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
    return (       
        <>
            <nav className="navbar ">
                <div className="container">
                    <div className="navbar-brand">
                    <Link className="text-white " to={"/"}><img src={logo} width="90" height="94"/> </Link> 
                    </div>
                        <h3>Misiotrónica SRL</h3>
                </div>
            </nav>        
                <hr />
            </>
    )
}

export default Header