export const Stars = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="sparkleGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g filter="url(#sparkleGlow)" fill="white">
      <path d="M36,8 C36,21 47,32 60,32 C47,32 36,43 36,56 C36,43 25,32 12,32 C25,32 36,21 36,8 Z" />

      <path d="M14,10 C14,14.5 17.5,18 22,18 C17.5,18 14,21.5 14,26 C14,21.5 10.5,18 6,18 C10.5,18 14,14.5 14,10 Z" />
    </g>
  </svg>
);
