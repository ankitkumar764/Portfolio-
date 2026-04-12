import React from 'react';

const PremiumFrame = () => {
  return (
    <div className="premium-frame" aria-hidden="true">
      <div className="frame-line frame-top"></div>
      <div className="frame-line frame-bottom"></div>
      <div className="frame-line frame-left"></div>
      <div className="frame-line frame-right"></div>
      
      {/* Decorative Corner Accents */}
      <div className="frame-accent accent-top-left"></div>
      <div className="frame-accent accent-top-right"></div>
      <div className="frame-accent accent-bottom-left"></div>
      <div className="frame-accent accent-bottom-right"></div>
    </div>
  );
};

export default PremiumFrame;
