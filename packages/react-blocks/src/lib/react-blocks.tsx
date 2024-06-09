import styles from './react-blocks.module.css';

/* eslint-disable-next-line */
export interface ReactBlocksProps {}

export function ReactBlocks(props: ReactBlocksProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactBlocks!</h1>
    </div>
  );
}

export default ReactBlocks;
