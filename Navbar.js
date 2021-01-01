import React, {useState} from 'react'
import {FaAlignJustify} from "react-icons/fa"
import {Link} from "react-router-dom"

 function Navbar() {
     const [isOpen, setIsOpen] = useState(false)
     const handleClick = () => {
         setIsOpen(prevIsOpen => !prevIsOpen)
     }
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <FaAlignJustify className="nav-icon" size="25px" color="white" onClick={handleClick}/>
                    <h1>Wellinton's Auto World</h1>
                    <h6>The Trusted Resource</h6>
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/car-sales">Car Sales</Link></li>
                    <li><Link to="/car-value">Car Value</Link></li>
                    <li><Link to="/car-repairs">Car Repairs</Link></li>
                </ul> 

            </div>
            
        </nav>
    )
}
export default Navbar
