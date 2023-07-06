import site from "shared/site";

import styles from "styles/sprint-board.module.scss";

interface SprintBoardColumnProps {
  title: string;
  children?: React.ReactNode;
  duration?: string;
}

const SprintBoardColumn = ({ children, title }: SprintBoardColumnProps) => (
  <div className={styles.column}>
    <strong>{title}</strong>
    {children}
  </div>
);

const SprintBoardTask = ({ title, duration }: SprintBoardColumnProps) => (
  <div className={styles.task}>
    <small>
      <strong>{title}</strong>
    </small>
    {duration && <small>{duration}</small>}
  </div>
);

const SprintBoard = () => (
  <section className={styles.sprintBoard}>
    <div className={styles.header}>
      <h2>More Features are coming soon! 🧑🏽‍💻</h2>
      <a href={site.issues}>Request New Features</a>
    </div>
    <div className={styles.columns}>
      <SprintBoardColumn title="⌛️ To Prioritize">
        <SprintBoardTask title="Fill Pattern" />
        <SprintBoardTask title="Replace Colors" />
        <SprintBoardTask title="Array Command" />
        <SprintBoardTask title="Path Text" />
      </SprintBoardColumn>
      <SprintBoardColumn title="📋 Backlog">
        <SprintBoardTask title="Export to PDF" duration="6 Weeks" />
        <SprintBoardTask title="Dimensioning" duration="2 Weeks" />
        <SprintBoardTask title="History panel" duration="2 Weeks" />
        <SprintBoardTask title="Envelope distort" duration="3 Weeks" />
      </SprintBoardColumn>
      <SprintBoardColumn title="🚧 In Progress">
        <SprintBoardTask title="Extrude Tool" duration="1 Week" />
        <SprintBoardTask title="Zig Zag Tool" duration="2 Days" />
        <SprintBoardTask title="Spiral tool" duration="3 Days" />
        <SprintBoardTask title="Trim tool" duration="1 Week" />
      </SprintBoardColumn>
    </div>
  </section>
);

export default SprintBoard;
