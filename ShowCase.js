import React from 'react';





function ShowCase({children,car,email,price,value}) {
  return (
    <div className="showCase">
        
    

    
      <div className="bgn">
         <h2>{car}</h2>
         <div />
        <h5>{email}</h5>
        <button className="button">{price}</button>
      
        {children}
      
      </div>

    </div>
  )
}

export default ShowCase;

/*<img className="images" src="/images/alloy-asphalt.jpg" alt="" width="700em" /> */

/*<h2>Car Shopping Made Easy</h2>
        <h5>WAW.com is your one-stop resource</h5>
        <button>Price New/Used</button>
        <button>My Cars Value</button> */