import React from 'react';
import PropTypes from 'prop-types';
import "./Audio.css"

export function ProgressBar(props) {
  return (
    <div className='container' style={{ width: `calc(${props.width || '100%'} - ${15}px)` }}>
      <div className='point' style={{ left: `${props.progressPercent}` }} />
      <div className='progress' style={{ width: `${props.progressPercent}` }} />
    </div>
  );
}

ProgressBar.propTypes = {
  progressPercent: PropTypes.string,
  width: PropTypes.string,
};
