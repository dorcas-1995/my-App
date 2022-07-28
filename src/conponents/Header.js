   //import React from 'react'
   
 const Header = ({title}) => {
     return (
       <div>
        <header>
            <h1>{title}</h1>
            {/* <h1 className="bg-success ">Dogs Breeds</h1> */}
        </header>

       </div>
     )
   }

   Header.defaultProps ={
    title: 'Dogs Breeds',
   }

   export default Header
   