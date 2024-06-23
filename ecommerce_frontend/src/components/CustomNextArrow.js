import React from 'react';

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#00BFFF', borderRadius: '50%' }} // Celeste
      onClick={onClick}
    />
  );
};

export default CustomNextArrow;
