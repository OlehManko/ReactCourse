import React, { useState } from 'react';

const ROLE_USER = [
  { value: 'admin', label: 'Admin role' },
  { value: 'user', label: 'User role' },
];

export const UserForm = ({ createUser }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(33);
  const [role, setRole] = useState('');

  const changeAge = (e) => {
    let temp = e.target.value;
    setAge(temp);
  };

  return (
    <form className="user-form">
      <h2>Create User</h2>
      <label>Name user: </label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <label>Age: </label>
      <input value={age} onChange={changeAge} type="number" min={0} max={100} />
      <label>Role: </label>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option disabled value="">
          Choose role
        </option>
        {ROLE_USER.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
    </form>
  );
};
