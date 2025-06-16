import React from 'react';

interface SVGIconProps {
  viewBox: string;
  path: string;
  className?: string;
  color?: string;
}

const SVGIcon: React.FC<SVGIconProps> = ({
  viewBox,
  path,
  className,
  color,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={viewBox}
      className={className}
      style={color ? { fill: color } : undefined}
    >
      <path d={path} />
    </svg>
  );
};

export default SVGIcon;
