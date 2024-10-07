// components/Navbar.tsx

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/users">Users</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/about">About</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px',
    color: 'white',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
  },
  navItem: {
    margin: '0 15px',
  },
};

export default Navbar;
