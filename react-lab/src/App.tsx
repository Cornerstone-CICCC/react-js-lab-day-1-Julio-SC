import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import './App.css';


export type FormDataType = {
  fullname: string;
  age: string;
  education: string;
  gender: string;
  skills: string[];
  bio: string;
};

export type User = Omit<FormDataType, 'age'> & { age: number; id: string };


const App = () => {
  const [formData, setFormData] = useState<FormDataType>({
    fullname: '',
    age: '',
    education: '',
    gender: '',
    skills: [],
    bio: '',
  });

  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);


  const generateId = () => `${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  // Campo común (text, number, select, radio, textarea)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Checkbox (skills)
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      skills: checked ? [...prev.skills, value] : prev.skills.filter(skill => skill !== value),
    }));
  };

  const handleClear = () => {
    setFormData({
      fullname: '',
      age: '' ,
      education: '',
      gender: '',
      skills: [],
      bio: '',
    });
    setIsEditing(false);
    setEditId(null);
    setSelectedUser(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (isEditing && editId) {
      setUsers(prev =>
        prev.map((user: User) =>
          user.id === editId
            ? { ...formData, age: Number(formData.age), id: editId }
            : user
        )
      );
    } else {
      const newUser: User = {
        ...formData,
        age: Number(formData.age),
        id: generateId(),
      };
      setUsers(prev => [...prev, newUser]);
    }
  
    handleClear();
  };
  
  
  const handleEdit = (user: User) => {
    setFormData({
      fullname: user.fullname,
      age: String(user.age),
      education: user.education,
      gender: user.gender,
      skills: user.skills,
      bio: user.bio,
    });
    setIsEditing(true);
    setEditId(user.id);
    setSelectedUser(null);
  };

  const handleDelete = (id: string) => {
    setUsers(prev => prev.filter(user => user.id !== id));
    if (selectedUser?.id === id) {
      setSelectedUser(null);
    }
  };

  const handleView = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div className="container">
      <UserForm
        formData={formData}
        onChange={handleChange}
        onCheckboxChange={handleCheckboxChange}
        onSubmit={handleSubmit}
        onClear={handleClear}
        isEditing={isEditing}
      />
  
      <div className="user-list">
        <UserList users={users} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
  
      <div id="profile">
        <UserProfile user={selectedUser} />
      </div>
    </div>
  );
  
  
  
};

export default App;
