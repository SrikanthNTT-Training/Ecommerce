import React from 'react';
import './Popup.css';

class Popup extends React.Component {

    
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
          <br />
           Enter Your Email Id : <input type="text" /><br /> <br /> <br /> <br />
          <button onClick={this.props.closePopup}>Send Email</button>
          </div>
        </div>
      );
    }
  }

  export default Popup;
  