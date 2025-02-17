"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, label }: { href: string, label: string }) => {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <Link
      href={href}
      id={label}
      className={`relative group hover:text-blue-500 text-lg ${isActive && 'text-blue-500'}`}
    >
      <span className="relative">
        {label}
        <span
          className={`absolute block h-0.5 bg-blue-500 bottom-0 left-0 group-hover:w-full transition-all duration-300 w-0`}
        />
      </span>
    </Link>
  );
};

export const Navbar = () => {
  return (
    <nav className="w-full text-white px-6 py-3 shadow-md backdrop-blur-lg sticky top-0 z-50 flex items-center">
      <Link href="/" className="me-auto group">
        <div className="relative flex items-center justify-center w-12 h-12 font-bold rounded-full group-hover:scale-105 group-hover:shadow-[0_0_15px] group-hover:shadow-blue-500">
          <div className="w-full h-full border-2 border-dashed border-blue-500 rounded-full group-hover:animate-spin-slow transition-all"></div>
          <div className="absolute text-lg">
            BT
          </div>
        </div>
      </Link>
      <ul className="flex justify-end gap-10 me-10">
        <li>
          <NavLink href='/' label='Home' />
        </li>
        <li>
          <NavLink href='/projects' label='Projects' />
        </li>
        <li>
          <NavLink href='/articles' label='Articles' />
        </li>
      </ul>
    </nav>
  );
};
