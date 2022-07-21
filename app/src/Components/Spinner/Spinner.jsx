import React from 'react'
import './spinner.scss';

const Spinner = () => {
  return (
    <div className='spinner-wrapper'>
        <div className='spinner'>
            <div className='spinner loader-inner'></div>
        </div>
    </div>
  )
}

export default Spinner;
