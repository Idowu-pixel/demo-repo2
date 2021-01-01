import React from 'react'


function Child({children, toll}) {
    return (
        <div className={toll}>
          {children}  
        </div>
    )  

}
Child.defaultProps = {
    toll: "case"
}

export default Child
