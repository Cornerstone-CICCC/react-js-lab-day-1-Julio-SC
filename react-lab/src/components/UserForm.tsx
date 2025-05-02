import React from "react";
import { FormDataType } from '../App';

type UserFormProps = {
  formData: FormDataType;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClear: () => void;
  isEditing: boolean;
};

const UserForm = ({ formData, onChange, onCheckboxChange, onSubmit, onClear, isEditing }: UserFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>{isEditing ? "Edit User" : "Add User"}</h2>

      <div>
        <label>Full Name:</label>
        <input type="text" name="fullname" value={formData.fullname} onChange={onChange} required />
      </div>

      <div>
        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={onChange} required />
      </div>

      <div>
        <label>Education:</label>
        <select name="education" value={formData.education} onChange={onChange} required>
          <option value="">-- Select --</option>
          <option value="Grade school">Grade school</option>
          <option value="High school">High school</option>
          <option value="College">College</option>
        </select>
      </div>

      <div>
  <label>Gender:</label>
  <div className="radio-group">
    <label>
      <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={onChange} />
      Male
    </label>
    <label>
      <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={onChange} />
      Female
    </label>
    <label>
      <input type="radio" name="gender" value="Other" checked={formData.gender === "Other"} onChange={onChange} />
      Other
    </label>
  </div>
</div>


<div>
  <label>Skills:</label>
  <div className="checkbox-group">
    <label>
      <input type="checkbox" value="TypeScript" checked={formData.skills.includes("TypeScript")} onChange={onCheckboxChange} />
      TypeScript
    </label>
    <label>
      <input type="checkbox" value="React" checked={formData.skills.includes("React")} onChange={onCheckboxChange} />
      React
    </label>
    <label>
      <input type="checkbox" value="Node" checked={formData.skills.includes("Node")} onChange={onCheckboxChange} />
      Node
    </label>
    <label>
      <input type="checkbox" value="NoSQL" checked={formData.skills.includes("NoSQL")} onChange={onCheckboxChange} />
      NoSQL
    </label>
  </div>
</div>


      <div className="full-width">
  <label>Bio:</label>
  <textarea name="bio" value={formData.bio} onChange={onChange}></textarea>
</div>


      <div>
        <button type="submit">{isEditing ? "Save User" : "Add User"}</button>
        <button type="button" onClick={onClear}>Clear</button>
      </div>
    </form>
  );
};

export default UserForm;
