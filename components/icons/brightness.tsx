import React, { SVGProps } from 'react';

interface BrightnessProps extends SVGProps<SVGSVGElement> {}

const Brightness = (props: BrightnessProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
      <path
        fill="#fff"
        d="M8 3a5 5 0 1 0 0 10A5 5 0 0 0 8 3zm0 1v8a4 4 0 0 1 0-8zm.5-4h-1v2h1zm4.803 1.99L11.89 3.404l.707.707 1.414-1.414zm-10.606 0-.707.707L3.404 4.11l.707-.707zM16 7.5h-2v1h2zm-14 0H0v1h2zm10.596 4.389-.707.707 1.414 1.414.707-.707zm-9.192 0L1.99 13.303l.707.707 1.414-1.414zm5.096 2.11h-1v2h1z"
      />
    </svg>
  );
};

export { Brightness };
