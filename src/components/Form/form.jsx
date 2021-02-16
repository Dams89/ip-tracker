import React from 'react';

const Form = () => {
    return (
        <form className='form-link'>
        <input className='input' type='search' name='link' placeholder='Search for any IP address or domain'></input>
        <button className='submit-btn'></button>
      </form>
        <div className='info-container'>
        <div className='infos'>
          <div>
            <h2> IP ADDRESS </h2>
            <span>  </span>
          </div>
          <div>
            <h2> LOCATION </h2>
            <span> </span>
          </div>
          <div>
            <h2>TIMEZONE</h2>
            <span>  </span>
          </div>
          <div>
            <h2>ISP</h2>
            <span> </span>
          </div>
        </div>
      </div>

    )
    
}

export default Form;
