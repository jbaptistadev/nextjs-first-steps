'use client';

import Link from 'next/link';
import styles from './ActiveLink.module.css';
import { usePathname } from 'next/navigation';

interface Props {
  path: string;
  label: string;
}
export const ActiveLink = ({ label, path }: Props) => {
  const pathName = usePathname();

  const isActive = pathName === path;
  return (
    <Link
      key={path}
      className={`${styles.link} ${isActive ? styles['active-link'] : ''}`}
      href={path}
    >
      {label}
    </Link>
  );
};
