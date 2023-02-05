import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'right'}}>
          <p onClick={() => onRouteChange('signout')} className='f6 link dim ba bw1 ph3 pv2 mb2 dib pointer dark-grey'>SIGN OUT</p>
        </nav>
      );
    } else {
      return (
        <nav style={{
          display: 'flex', justifyContent: 'right'}}>
          <p onClick={() => onRouteChange('signin')} className='f6 link dim ba bw1 ph3 pv2 mb2 dib pointer dark-grey'>SIGN IN</p>
          <p onClick={() => onRouteChange('register')} className='f6 link dim ba bw1 ph3 pv2 mb2 dib pointer dark-grey'>REGISTER</p>
        </nav>
      );
    }
}

export default Navigation;