import React from 'react';

const Alert = (props) => {
  return (<div className='alert'>
    <div className='alert__inner' onClick={()=>{props.setAlertFN(false)}}>
      <h2>Sorry... This button doesn't do anything yet.</h2>
      <span>Once we get more content in here, it will allow you to contact Madi to book an appointment.</span>
      <button>Close</button>
    </div>
  </div>)
}
export default Alert;
