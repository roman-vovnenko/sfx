// app/users/page.tsx

"use client";

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import styles from './UserTable.module.css';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the API route
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Users List</h1>
      {users.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>              
            </tr>
          </thead>
          <tbody>
            {users.map((user: any, index: number) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}
