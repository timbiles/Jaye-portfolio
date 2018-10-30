import React from 'react';

import './footer.css';

const footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <p style={{ color: '#000' }}>© 2018 Olive Branch Designs</p>
        <img
          className="olive"
          src="https://image.flaticon.com/icons/svg/85/85254.svg"
          alt="Olive Branch"
        />
        <p>|</p>
        <p>www.jayebiles.com</p>
      </div>
      <div className="footer_right">
        <a href="https://www.youtube.com/user/jayebiles" target='blank'>
          <svg
            className="youtube"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default footer;
