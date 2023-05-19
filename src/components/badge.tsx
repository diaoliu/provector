import styles from "styles/badge.module.scss";

type BadgeProps = {
  children?: React.ReactNode;
  content: string;
};

const Badge = ({ children, content }: BadgeProps) => (
  <div className={styles.badge}>
    {children}
    <span>{content}</span>
  </div>
);

export default Badge;
