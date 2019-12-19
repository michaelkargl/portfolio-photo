import React from 'react';

import config from '../../config';
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';

export default function Footer({ onClose, isVisible }) {
  return (
    <footer id="footer" className={`panel ${isVisible ? 'active' : ''}`}>
      <div className="inner split">
        
        <div>
          <AboutMe></AboutMe>
        </div>
        
        <div>
            <ContactMe socialLinks={config.socialLinks}></ContactMe>
        </div>

      </div>
      <div
        className="closer"
        onClick={e => {
          e.preventDefault();
          onClose();
        }}
      />
    </footer>
  );
}
