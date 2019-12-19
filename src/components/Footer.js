import React from 'react';

import config from '../../config';
import ContactMe from './ContactMe';

export default function Footer({ onClose, isVisible }) {
  return (
    <footer id="footer" className={`panel ${isVisible ? 'active' : ''}`}>
      <div className="inner split">
        
        <div>
          <section>
            <h2>More about me</h2>
            <p>
              Software Developer by day. Wannabe Photographer by night 😎🌟.
              This page is still under heavy development so please be patient :3
            </p>
          </section>
        </div>
        
        <div>
          <section>
            {/* <h2>Get in touch</h2>
            <form method="post" action="#">
              <div className="fields">
                <div className="field half">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="field half">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="field">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    placeholder="Message"
                  />
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send" className="primary" />
                </li>
                <li>
                  <input type="reset" value="Reset" />
                </li>
              </ul>
            </form> */}

            <ContactMe socialLinks={config.socialLinks}></ContactMe>
            
            
          </section>
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
