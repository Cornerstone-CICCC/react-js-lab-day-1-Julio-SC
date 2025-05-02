import { User } from "../App";

type UserListProps = {
  users: User[];
  onView: (user: User) => void;
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
};

const UserList = ({ users, onView, onEdit, onDelete }: UserListProps) => {
  return (
    <div>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users yet.</p>
      ) : (
        <table border={1} cellPadding={8}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.fullname}</td>
                <td>
                  <button onClick={() => onView(user)}>View</button>{" "}
                  <button onClick={() => onEdit(user)}>Edit</button>{" "}
                  <button onClick={() => onDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
