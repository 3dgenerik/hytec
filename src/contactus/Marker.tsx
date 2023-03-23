import React from "react";

export const Marker: React.FC = () => {
    return (<svg
        width="44"
        height="60"
        viewBox="0 0 44 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_2_20)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.0434 32.9592C34.3256 28.9641 37.0873 25.6025 37.0873 19.5C37.0873 10.9396 30.1477 4 21.5873 4C13.0269 4 6.08732 10.9396 6.08732 19.5C6.08732 25.6308 8.8327 28.9952 12.1127 33.0148C15.5202 37.1906 19.5047 42.0736 21.5873 51.5C23.5898 42.0317 27.6026 37.1474 31.0434 32.9592ZM21 23C18.7909 23 17 21.2092 17 19C17 16.7909 18.7909 15 21 15C23.2091 15 25 16.7909 25 19C25 21.2092 23.2091 23 21 23Z"
            fill="#FF3A4D"
          />
        </g>
        <circle cx="21.5" cy="19.5" r="5.5" fill="#A82532" />
        <defs>
          <filter
            id="filter0_d_2_20"
            x="0.0873203"
            y="0"
            width="43"
            height="59.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2_20"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2_20"
              result="shape"
            />
          </filter>
        </defs>
      </svg>)
}