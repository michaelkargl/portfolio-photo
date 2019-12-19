import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactMe extends Component {

    constructor() {
        super();
    }

    generateSocialLinkListItems(links) {
        return links.map(social => {
            const { icon, name, url } = social;
            return (
                <li key={url}>
                    <a href={url} className={`icon ${icon}`} target="_blank" rel="noopener noreferrer">
                        <span className="label">{name}</span>
                    </a>
                </li>
            );
        });
    }
    
    render() {
        return (
            <div className="component--contactme">
                <h2>Don't be shy 😁</h2>
                <ul className="icons">
                    {this.generateSocialLinkListItems(this.props.socialLinks)}
                </ul>
            </div>
        );
    }
}


ContactMe.propTypes = {
    socialLinks: PropTypes.array
};

export default ContactMe;