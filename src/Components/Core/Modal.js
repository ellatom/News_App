import React from 'react';
import LiveNewsPage from '../Common/LiveNewsPage';
import '../../CSS/modal.css';

class Popup extends React.Component {
  render() {
    return (
      <div className='modal'>
        <div className='popup_inner'>
          <LiveNewsPage post={this.props.post} savePost={this.props.savePost} closePopup={this.props.closePopup} ></LiveNewsPage>
        </div>
      </div>
    );
  }
}

export default Popup;