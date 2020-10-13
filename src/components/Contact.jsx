import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div class="Contact">
     <img className="Avatar"
      src="http://randomuser.me/api/portraits/men/72.jpg"
     />
     <div>
       <h4 className="name">Felix Freeman</h4>
       <div className="status">
          <i class="status-online"></i>
          <p class="status-text">online</p>
       </div>
    </div>
  </div>
);
}

export default Contact;