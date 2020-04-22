import React from 'react';
import './contact.styles.scss';

class ContactPage extends React.Component {
    render() {
        return (
            <div className='contact'>
                <h2>Contact:</h2>
                <h3>Krishna</h3>
                <h4><a href="mailto:krishnamohanverma@outlook.com">krishnamohanverma@outlook.com</a></h4>
            </div>
        );
    }
}

export default ContactPage;