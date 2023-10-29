import {
  mdiFormatTextbox,
  mdiImageOutline,
  mdiLayersOutline,
  mdiPaletteSwatchOutline,
  mdiRotateRight,
  mdiVectorCurve,
} from "@mdi/js";

import Icon from "icons/icon";
import SectionHeader from "components/section-header";

import styles from "styles/features.module.scss";

const Feature = ({ header = "", icon = "", content = "" }) => (
  <div className={styles.feature}>
    <Icon d={icon} size={32} />
    <h3>{header}</h3>
    <small>{content}</small>
  </div>
);

const Features = () => (
  <section>
    <SectionHeader
      emoji="🚀"
      header="Features"
      subheader="Create sophisticated vector graphics with full-featured vector drawing
      tools"
    />
    <div className={styles.features}>
      <Feature
        icon={mdiPaletteSwatchOutline}
        header="Styling"
        content="Color Picker / Gradient / Eyedropper / Blend Modes / Opacity / Stroke
          Style"
      />
      <Feature
        icon={mdiRotateRight}
        header="Transform"
        content=" Move Tool / Rotate Tool / Perspective Transform / Transform Each /
        Repeat Transform"
      />
      <Feature
        icon={mdiLayersOutline}
        header="Arrange"
        content="Align Objects / Distribute Objects / Spacing / Stack Objects / Group
        Objects / Clip Mask"
      />
      <Feature
        icon={mdiVectorCurve}
        header="Path Editing"
        content="Join Paths / Cut Paths / Blend Paths / Simplify Paths / Offset Paths /
        Outline Strokes"
      />
      <Feature
        icon={mdiFormatTextbox}
        header="Typesetting"
        content="Area Text / Google Fonts / Local Fonts / Line Height / Create Outlines"
      />
      <Feature
        icon={mdiImageOutline}
        header="Import & Export"
        content="Drag Drop Files / SVG / PDF (Export only) / JPEG / PNG / WebP"
      />
    </div>
  </section>
);

export default Features;
