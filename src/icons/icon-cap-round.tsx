import InlineIcon from "./inline-icon";

const IconCapRound = ({ size = 14 }) => (
  <InlineIcon>
    <svg viewBox="-2 -1 20 18" height={size}>
      <path
        d="M 1 15 H 10 A 7 7 0 0 0 10 1 H 1"
        strokeWidth={1}
        stroke="currentColor"
        fill="currentColor"
        fillOpacity={0.1}
      />
      <line
        x1={1}
        y1={8}
        x2={10}
        y2={8}
        stroke="currentColor"
        strokeWidth={1}
      />
      <circle cx={10} cy={8} r={2.5} fill="currentColor" />
    </svg>
  </InlineIcon>
);

export default IconCapRound;
