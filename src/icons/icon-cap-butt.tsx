import InlineIcon from "./inline-icon";

const IconCapButt = ({ size = 14 }) => (
  <InlineIcon>
    <svg viewBox="-2 -1 20 18" height={size}>
      <path
        d="M 1 1 H 15 V 15 H 1"
        stroke="currentColor"
        strokeWidth={1}
        fill="currentColor"
        fillOpacity={0.1}
      />
      <line
        x1={1}
        y1={8}
        x2={15}
        y2={8}
        stroke="currentColor"
        strokeWidth={1}
      />
      <circle cx={15} cy={8} r={2.5} fill="currentColor" />
    </svg>
  </InlineIcon>
);

export default IconCapButt;
