import styles from "styles/features.module.scss";

import FeatureSection from "./feature-section";

const Features = () => (
  <div className={styles.features}>
    <FeatureSection
      label="Cross-platform"
      header="Create Stunning Design in Browser"
      functions={["MacOS", "Windows", "Linux"]}
    >
      Start drawing vector graphics immediately in your browser without
      registration and subscription. Bring your design ideas to life with
      cutting-edge HTML canvas technology. Stay focused on expressing your
      creativity with a lightweight and intuitive user interface.
    </FeatureSection>
    <FeatureSection
      label="Illustration"
      header="Sophisticated Illustration Has Been Never Easier"
      functions={[
        "Pen Tool",
        "Direct Selection Tool",
        "Boolean Operations",
        "Shape Builder",
        "Live Corners",
        "Free Transform",
        "Offset Path",
        "Outline Stroke",
        "Simplify Path",
        "Smooth Path",
        "Blend Paths",
      ]}
    >
      Easily create and edit sophisticated and professional vector graphics with
      full-featured vector drawing tools. Precise control over your design
      artwork to create high-quality illustrations and icons. A solid set of
      path editing features help you to realize your ideas without limitations.
    </FeatureSection>
    <FeatureSection
      label="Technical Drawing"
      header="Make Precise Drawings Like an Engineer"
      functions={[
        "Snap to Grid",
        "Snap to Bounding Boxes",
        "Snap to Anchor Points",
        "Snap to Curve Locations",
        "Snap to Curve Tangent",
      ]}
    >
      Whether you're an engineer, product designer, or architect, our object
      snaps function enables you to create more precise geometric shapes and
      elegant curves, allowing you to build professional technical drawings. In
      addition you can add more attractive styles to your drawings.
    </FeatureSection>
    <FeatureSection
      label="UI Design / Print / Typography"
      header="Start Your Projects Today With the Tools You Know"
      functions={[
        "Unlimited Frames",
        "Align and Distribute Objects",
        "Spacing",
        "Group",
        "Clip Mask",
        "Google Fonts",
        "Local Fonts",
        "Outline Text",
      ]}
    >
      Create interface design, poster or whatever you want with infinite canvas
      and unlimited frames. Drag and drop images from website or your computer
      into your artwork. Align, distribute and arrange objects like other design
      softwares. Directly access your local fonts without plugins to make great
      typography.
    </FeatureSection>
  </div>
);

export default Features;
