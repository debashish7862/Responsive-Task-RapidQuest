import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <nav>
        <div className="topNav">
            <img className='logo' src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?w=740&t=st=1704723210~exp=1704723810~hmac=5c524c4130cc2bbeb8546105bc3adf26ad724252f84be8141272424d0b08700c" alt="logo" />
            <button className='search'><i class="bi bi-search"></i></button>
</div>
            <div className='homeLink'>
            <a href="/home"  ><i class="bi bi-house"></i></a>
            </div>


        
        

        <div className="middleNav">
            
            
            <a href="/feeds"><i class="bi bi-cash-stack"></i></a>
            <a href="/list"><i class="bi bi-card-list"></i></a>
            <a href="/user"><i class="bi bi-person"></i></a>

        </div>
        
        <div className="bottomNav">
        <button className='bell'><i class="bi bi-bell"></i></button>
       <button className='signOut'><i class="bi bi-box-arrow-right"></i></button>
        </div>



    </nav>
  )
}

export default Navbar