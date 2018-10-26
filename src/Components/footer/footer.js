import React from 'react';

import './footer.css';

const footer = () => {
    return (
        <div className='footer'>
            <p
            style={{color: '#000'}}
          >© 2018 Olive Branch Designs</p>
          <img className="olive" src="https://image.flaticon.com/icons/svg/85/85254.svg" alt="Olive Branch" />
            <p>|</p>
            <p>www.jayebiles.com</p>
        </div>
    );
};

export default footer;