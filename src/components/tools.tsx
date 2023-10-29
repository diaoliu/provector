import { useState } from "react";
import {
  mdiCursorDefaultOutline,
  mdiFountainPenTip,
  mdiVectorDifferenceAb,
  mdiContentCut,
  mdiSetCenterRight,
  mdiPerspectiveMore,
  mdiCircleDouble,
  mdiMagnetOn,
  mdiArtboard,
  mdiVectorBezier,
  mdiApproximatelyEqual,
  mdiGesture,
} from "@mdi/js";
import clsx from "clsx";

import Icon from "icons/icon";

import styles from "styles/tools.module.scss";

const kebabCase = (str: string) => str.toLowerCase().split(" ").join("-");

const tools: [string, string, number][] = [
  [mdiCursorDefaultOutline, "Anchor Point Tool", 24],
  [mdiFountainPenTip, "Pen Tool", 24],
  [mdiVectorDifferenceAb, "Boolean Operations", 24],
  [mdiContentCut, "Trim Path", 24],
  [mdiSetCenterRight, "Shape Builder", 28],
  [mdiPerspectiveMore, "Free Transform", 24],
  [mdiCircleDouble, "Live Corners", 24],
  [mdiMagnetOn, "Object Snaps", 22],
  [mdiArtboard, "Unlimited Frames", 24],
  [mdiVectorBezier, "Smooth Path", 26],
  [mdiApproximatelyEqual, "Offset Path", 30],
  [mdiGesture, "Outline Stroke", 26],
];

interface ToolProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: string;
  label: string;
  size: number;
}

const Tool = ({ className, icon, label, onClick, size }: ToolProps) => (
  <button className={clsx(styles.tool, className)} onClick={onClick}>
    <Icon d={icon} size={size} />
    <strong>{label}</strong>
  </button>
);

const Tools = () => {
  const [selected, setSelected] = useState("anchor-point-tool");

  const className = (label: string) =>
    clsx(selected === kebabCase(label) && styles.active);

  return (
    <section className={styles.tools}>
      <div className={styles.buttons}>
        {tools.map(([icon, label, size]) => (
          <Tool
            key={label}
            icon={icon}
            size={size}
            label={label}
            className={className(label)}
            onClick={() => setSelected(kebabCase(label))}
          />
        ))}
      </div>
      <video width="100%" autoPlay loop muted src={selected + ".mp4"} />
    </section>
  );
};

export default Tools;
