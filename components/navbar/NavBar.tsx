import Link from 'next/link';
import { HomeIcon } from '@primer/octicons-react';
import { ActiveLink } from '..';
const navItems = [
  {
    path: '/about',
    label: 'About',
  },
  {
    path: '/pricing',
    label: 'Pricing',
  },
  {
    path: '/contact',
    label: 'Contact',
  },
];
export const NavBar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-4 rounded">
      <Link href={'/'} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1" />
      {navItems.map((item) => (
        <ActiveLink key={item.path} {...item} />
      ))}
    </nav>
  );
};
