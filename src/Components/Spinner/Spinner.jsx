import React from 'react'
import './spinner.scss';

const Spinner = () => {
  return (
    <div className='loader-wrapper'>
        <div className='loader'>
            <div className='loader loader-inner'></div>
        </div>
    </div>
  )
}

export default Spinner;
