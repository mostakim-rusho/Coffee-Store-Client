import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData(); // ⬅️ expect array

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">User List</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={user._id || index}>{user.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
