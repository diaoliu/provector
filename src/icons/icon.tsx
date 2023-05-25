const Icon = ({ d = "", size = 16 }) => (
  <svg fill="currentColor" width={size} height={size} viewBox="0 0 24 24">
    <path d={d} />
  </svg>
);

export default Icon;
