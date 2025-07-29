import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      d="M128 24a88.1 88.1 0 0 0-88 88c0 43.4 35.8 92.4 82.2 119.2a12.2 12.2 0 0 0 11.6 0C180.2 204.4 216 155.4 216 112a88.1 88.1 0 0 0-88-88Z"
      opacity={0.2}
    />
    <path
      d="M128 24a88.1 88.1 0 0 0-88 88c0 43.4 35.8 92.4 82.2 119.2a12.2 12.2 0 0 0 11.6 0C180.2 204.4 216 155.4 216 112a88.1 88.1 0 0 0-88-88Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
    <path
      d="m156.4 135.6-56.8-32.8m28.4 69.2L95.2 140m61.2.4-32.8-56.8"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
    <circle
      cx={128}
      cy={120}
      r={20}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
  </svg>
);

export default Logo;
