import React from 'react';

const Form = () => {
    return (
        <form className='form-link'>
        <input className='input' type='search' name='link' placeholder='Search for any IP address or domain'></input>
        <button className='submit-btn'></button>
      </form>
    )
    
}

export default Form;