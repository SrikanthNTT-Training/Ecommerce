import React from 'react';
import './Popup.css';

class Popup extends React.Component {

    
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
          <br />
         {/*   Enter Your Email Id : <input type="text" /><br /> <br /> <br /> <br />
          <button onClick={this.props.closePopup}>Send Email</button> */}
          <h2>Need to be integrated with Payment Gateway</h2>
          <button onClick={this.props.closePopup}>Close Me</button>
          </div>
        </div>
      );
    }
  }

  export default Popup;
  