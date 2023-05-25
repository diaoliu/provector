import InlineIcon from "./inline-icon";

const IconSpacing = ({ size = 12, rotate = 0 }) => (
  <InlineIcon>
    <svg viewBox="0 0 12 12" height={size} transform={`rotate(${rotate})`}>
      <g fill="none" stroke="currentColor" strokeWidth={1}>
        <line x1={0} y1={0.5} x2={12} y2={0.5} />
        <rect x={2.5} y={3.5} width={7} height={5} />
        <line x1={0} y1={11.5} x2={12} y2={11.5} />
      </g>
    </svg>
  </InlineIcon>
);

export default IconSpacing;
