import React, { SVGProps } from 'react';

interface BatteryProps extends SVGProps<SVGSVGElement> {}

const Battery = (props: BatteryProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
      <g fill="#fff" color="#000">
        <path
          d="M5 13V6h6v7z"
          overflow="visible"
          style={{
            marker: 'none',
          }}
        />
        <path
          d="M3 12.338c.01.839-.015 1.451.262 1.953.138.251.374.45.666.56.292.11.64.149 1.078.149H11c.439 0 .786-.039 1.078-.148.293-.11.526-.31.664-.56.277-.503.249-1.115.258-1.954V3.631c-.01-.839.02-1.453-.258-1.955a1.25 1.25 0 0 0-.664-.559C11.786 1.007 11.438 1 11 1h-1V0H6v1h-.994c-.438 0-.786.007-1.078.117-.292.11-.528.308-.666.559-.277.502-.252 1.116-.262 1.955v8.705zm1-.014V3.633c.01-.853.04-1.298.137-1.475.016-.028.057-.073.143-.105.06-.023.298-.053.726-.053H11c.428 0 .664.03.727.053.086.032.125.077.14.105.095.173.123.618.133 1.475v8.705c-.01.854-.038 1.298-.133 1.47-.016.03-.055.074-.14.106-.123.046-.349.086-.727.086H5.006c-.378 0-.604-.04-.726-.086-.086-.032-.127-.077-.143-.105-.098-.178-.126-.62-.137-1.485z"
          fontFamily="sans-serif"
          fontWeight={400}
          overflow="visible"
          style={{
            lineHeight: 'normal',
            fontVariantLigatures: 'none',
            fontVariantPosition: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantAlternates: 'normal',
            fontFeatureSettings: 'normal',
            textIndent: 0,
            textAlign: 'start',
            textDecorationLine: 'none',
            textDecorationStyle: 'solid',
            textDecorationColor: '#000',
            textTransform: 'none',
            isolation: 'auto',
            mixBlendMode: 'normal',
            marker: 'none',
          }}
        />
      </g>
    </svg>
  );
};

export { Battery };
