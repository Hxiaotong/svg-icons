import React from 'react';

function Icon(props: any) {
  const { type } = props;
  return (
    <svg {...props} className="icon">
      <use xlinkHref={`${type}`} />
    </svg>
  );
}

export default Icon