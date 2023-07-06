import Chips from "components/chips";
import FeatureLink from "components/features/feature-link";
import FeatureSection from "components/features/feature-section";
import FeatureSections from "components/features/feature-sections";

const Features = () => (
  <>
    <FeatureSection
      reverse
      priority
      id={FeatureSections.CROSS_PLATFORM}
      label="Cross-platform"
      header="Create Stunning Design in Browser"
      image="/browser.webp"
    >
      <p>
        Start drawing vector graphics immediately in your browser without
        registration and subscription. Bring your design ideas to life with
        cutting-edge HTML canvas technology. Stay focused on expressing your
        creativity with a lightweight and intuitive user interface.
      </p>
      <Chips>
        <FeatureLink label="MacOS" href="/docs#browser-requirements" />
        <FeatureLink label="Windows" href="/docs#browser-requirements" />
        <FeatureLink label="Linux" href="/docs#browser-requirements" />
      </Chips>
    </FeatureSection>
    <FeatureSection
      id={FeatureSections.ILLUSTRATION}
      label="Illustration"
      header="Sophisticated Illustration Has Been Never Easier"
      image="/illustration.svg"
    >
      <p>
        Easily create and edit sophisticated and professional vector graphics
        with full-featured vector drawing tools. Precise control over your
        design artwork to create high-quality illustrations and icons. A solid
        set of path editing features help you to realize your ideas without
        limitations.
      </p>
      <Chips>
        <FeatureLink
          label="Pen Tool"
          href="/docs/path#draw-paths-with-the-pen-tool"
        />
        <FeatureLink
          label="Direct Selection Tool"
          href="/docs/path#edit-paths-with-the-direct-selection-tool"
        />
        <FeatureLink
          label="Boolean Operations"
          href="/docs/path#boolean-operations"
        />
        <FeatureLink
          label="Shape Builder"
          href="/docs/path#draw-shapes-with-the-shape-builder-tool"
        />
        <FeatureLink label="Live Corners" href="/docs/path#live-corners" />
        <FeatureLink label="Offset Path" href="/docs/path#offset-paths" />
        <FeatureLink label="Outline Stroke" href="/docs/path#outline-strokes" />
        <FeatureLink label="Simplify Path" href="/docs/path#simplify-paths" />
        <FeatureLink label="Blend Paths" href="/docs/path#blend-paths" />
      </Chips>
    </FeatureSection>
    <FeatureSection
      reverse
      id={FeatureSections.TECHNICAL_DRAWING}
      label="Technical Drawing"
      header="Make Precise Drawings Like an Engineer"
      image="/drawing.svg"
    >
      <p>
        Whether you are an engineer, product designer, or architect, object
        snaps enables you to create more precise geometric shapes and elegant
        curves, allowing you to build professional technical drawings
        effortlessly. In addition you can add more attractive styles to your
        drawings.
      </p>
      <Chips>
        <FeatureLink
          label="Snap to Grid"
          href="/docs/object-snaps#snap-to-grid"
        />
        <FeatureLink
          label="Snap to Bounding Boxes"
          href="/docs/object-snaps#snap-to-bounding-boxes"
        />
        <FeatureLink
          label="Snap to Anchor Points"
          href="/docs/object-snaps#snap-to-anchor-points"
        />
        <FeatureLink
          label="Snap to Curve Locations"
          href="/docs/object-snaps#snap-to-curve-locations"
        />
        <FeatureLink
          label="Snap to Curve Tangent"
          href="/docs/object-snaps#snap-to-curve-tangent-and-normal"
        />
      </Chips>
    </FeatureSection>
    <FeatureSection
      id={FeatureSections.PRINT}
      label="UI Design / Print / Typography"
      header="Start Your Projects Today With the Tools You Know"
      image="/print.webp"
    >
      <p>
        Create interface design, poster or whatever you want with infinite
        canvas and unlimited frames. Drag and drop images from website or your
        computer into your artwork. Align, distribute and arrange objects like
        other design softwares. Directly access your local fonts without plugins
        to make great typography.
      </p>
      <Chips>
        <FeatureLink label="Unlimited Frames" href="/docs/frame" />
        <FeatureLink
          label="Align and Distribute Objects"
          href="/docs/arrange-objects#align-and-distribute-objects"
        />
        <FeatureLink label="Group" href="/docs/arrange-objects#group-objects" />
        <FeatureLink
          label="Clip Mask"
          href="/docs/arrange-objects#create-clipping-mask"
        />
        <FeatureLink label="Google Fonts" href="/docs/text#font-family" />
        <FeatureLink label="Local Fonts" href="/docs/text#font-family" />
        <FeatureLink label="Outline Text" href="/docs/text#create-outlines" />
      </Chips>
    </FeatureSection>
  </>
);

export default Features;
