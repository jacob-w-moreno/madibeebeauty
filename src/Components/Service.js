import React from 'react';
import {useState} from 'react';

const Service = (props) => {
  const [details, showDetails] = useState(false);
  console.log(details)
  return(
    <div className='service'>
      <div className='name-price' onClick={()=>showDetails(details?false:true)}>
        <h3 className={details ? 'name-pink' : 'name-green'}>{props.name}</h3>
        {details ? <div className='price'>{props.price}</div> : '>'}
      </div>
      {details ? 
      <div className='details'>
        <div className='description'>{props.description}</div> 
        <button>BOOK AN APPOINTMENT</button>
      </div>
      : null}
    </div>
  )
}
export default Service;