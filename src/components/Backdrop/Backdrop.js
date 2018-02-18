import React from 'react';

import './Backdrop.css';

const backdrop = props => {
  const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];
  const backgroundShaded = props.light ? { backgroundColor: 'rgba(0,0,0,0)' } : { backgroundColor: 'rgba(0,0,0,0.8)' };
  return <div className={cssClasses.join(' ')} style={backgroundShaded} />;
};

export default backdrop;
