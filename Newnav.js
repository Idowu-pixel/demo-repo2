import React from 'react'
import {Link} from "react-router-dom"

 function Newnav() {
    return (
        <div>
           <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/car-sales">Car Sales</Link></li>
                    <li><Link to="/car-value">Car Value</Link></li>
                    <li><Link to="/car-repairs">Car Repairs</Link></li>
                </ul> 
        </div>
    )
}
export default Newnav
