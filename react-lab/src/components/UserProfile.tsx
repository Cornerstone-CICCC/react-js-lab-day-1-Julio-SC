import { User } from "../App";

type UserProfileProps = {
  user: User | null;
};

const UserProfile = ({ user }: UserProfileProps) => {
  if (!user) return <p>No user selected.</p>;

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Full Name:</strong> {user.fullname}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Education:</strong> {user.education}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>Skills:</strong> {user.skills.join(", ")}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
    </div>
  );
};

export default UserProfile;
