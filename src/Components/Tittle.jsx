import React from 'react';

const Tittle = ({ children }) => {
    return (
        <div className='h-screen flex justify-center items-center text-5xl font-bold'>
            {children}
        </div>
    );
};

export default Tittle;