import React from 'react'
import isloading from '../../img/spinner.gif';

export default function Spinner() {
    return (
        <div>
            <img src={isloading} alt='' className='spinner' style={{width:'200px',margin:'20px auto',transform:'translateX(220%)'}}/>
        </div>
    )
}
