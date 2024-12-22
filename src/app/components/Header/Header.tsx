import Link from 'next/link';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">홈</Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><Link href="/menuA">메뉴1</Link></li>
          <li><Link href="/menuB">메뉴2</Link></li>
          <li><Link href="/posts">동적라우팅</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
