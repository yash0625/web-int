// src/components/UserList.tsx
import React, { useEffect, useState } from "react";
import { getUsers } from "../services/userService";

const UserList = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers(1); // Fetch first page of users
        setUsers(response.data);
        setError("");
      } catch (err) {
        setError("Failed to fetch users");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Users List</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar}
                alt={user.first_name}
                className="w-12 h-12 rounded-full"
              />
              <span>
                {user.first_name} {user.last_name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
