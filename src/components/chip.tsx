import styles from "styles/chip.module.scss";

type ChipProps = {
  label: string;
};

const Chip = ({ label }: ChipProps) => (
  <div className={styles.chip}>
    <small>{label}</small>
  </div>
);

export default Chip;
