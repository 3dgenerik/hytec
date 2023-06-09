import React from 'react';
import { MdEmail } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import { EColors } from '../../constants/constants';

interface IProcessTextProps {
  isLoaded: boolean;
  text: string;
  color?: string;
  size: number;
  textColor: string;
  children?: React.ReactNode;
}

export const ProcessText: React.FC<IProcessTextProps> = ({
  isLoaded,
  text,
  color,
  size,
  textColor,
  children,
}) => {
  return (
    <div
      className={`proces-text mt-3 mt-sm-4 fs-${size} ${textColor}`}
      style={{ fontWeight: '400' }}
    >
      {!isLoaded ? (
        text?.split('\n').map((item: string, idx: number) => (
          <p key={idx} style={{ textIndent: '30px', lineHeight: '1.4rem' }}>
            {item.split('//').length > 2 ? (
              <>
                {item.split('//')[0]}{' '}
                {/* <span className="fw-bold">{item.split("//")[1]}</span>{" "} */}
                <a
                  href="mailto: info@hytec-baumaschinen.de"
                  className={`text-dark fw-bold`}
                >
                  <u>{item.split('//')[1]}</u>
                </a>{" "}
                {item.split('//')[2]}
              </>
            ) : (
              item
            )}
            {/* {text?.split("\n").length === (idx + 1) ? children : ''} */}
          </p>
        ))
      ) : (
        <Skeleton count={5} baseColor={color} />
      )}
      {children}
    </div>
  );
};
