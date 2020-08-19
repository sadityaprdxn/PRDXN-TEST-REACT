import React from 'react';
import errorImage from '../images/error.png';

const Error = () => {

    return (
        <section className='error'>
            <figure>
                <img src={errorImage} alt='error' />
            </figure>
        </section>
    );
}

export default Error;
