import styles from './react-blog.module.css';

/* eslint-disable-next-line */
export interface ReactBlogProps {}

export function ReactBlog(props: ReactBlogProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactBlog!</h1>
    </div>
  );
}

export default ReactBlog;
