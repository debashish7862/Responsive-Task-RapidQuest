import React from 'react'
import './userDetails.css'


function UserDetails() {
  return (
    <>
    <div className='userCard'>
        <div className='profileDetails'>
          <div className="userDp">
          <img src="https://avatars.githubusercontent.com/u/99885734?v=4"  className='userDpimg' alt="dp" />
          </div>
          <div className="nameHeading">
            <h3 className='name'> Hi Debashish,</h3>
            <p className='welcome p-small'>welcome back.</p>

          </div>
        </div>
        <div className='accountDetails'>
            <p className='font'>Today</p>
            <div className='money'>
            <p className='font priceBig'>$19,892</p>
            <p className='p-small'>Account Balance</p>

            </div>
            <div className='m2m3'>
            <div className='money2'>
                <p className='price'>$4,000</p>
                <p className='p-small'>Yaer-to-Date <span className='contribution'>Contributations</span></p>
            </div>
            <div className="money3 ">
                <p className='price'>$1,892</p>
                <p className='p-small'>Total Interest</p>
            </div>

            </div>
            <div className="iWantTo">
                <button className='buttonIwant'>I want to<i class="bi bi-caret-down-fill"></i></button>
            </div>
            </div>
            
        <div className='recentTransactions'>
            <p className='recentTransactionsName'>Recent Transactions</p>
            <div className="transfer1">
                <p className='p-small'>2020-08-07</p>
                <p className='font fontOne'>Withdrawal Transfer to Bank-XXX11</p>

            </div>
            <hr className=' hr hr1'/>
            <div className="transfer2">
                <p className='p-small'>2020-07-21</p>
                <p className='font'>Withdrawal Transfer to Bank-XXX11</p>

            </div>
            <hr className=' hr hr2'/>
            <div className="transfer3">
            <p className='p-small'>2020-07-16</p>
                <p className='font'> Withdrawal Transfer to Bank-XXX11</p>
            </div>
            <hr className=' hr hr3'/>

        </div>



    </div>
    
    
    
    </>
  )
}

export default UserDetails