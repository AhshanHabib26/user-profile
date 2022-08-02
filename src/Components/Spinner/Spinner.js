import React from 'react';
import SpinnerImg from '../Image/Spinner.gif'

const Spinner = () => {
    return (
        <div className='my-5'>
            <div className='d-flex align-items-center justify-content-center'>
                <img src={SpinnerImg} alt="" />
            </div>
        </div>
    );
};

export default Spinner;