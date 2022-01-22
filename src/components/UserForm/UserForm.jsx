import React, { useState } from 'react';
import { ButtonCourse } from '../../Button/ButtonCourse';
import './UserForm.css';

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

  const getName = (e) => {
    setName(e.target.value);
  };

  const handleData = (e) => {
    e.preventDefault();
    const newUser = { name: name, age: age, role: role, id: Date.now() };
    createUser(newUser);
  };

  return (
    <form className="user-form" name="user-create" onSubmit={handleData}>
      <h2>Create User</h2>
      <label>Name user: </label>
      <input value={name} onChange={getName} />
      {/* <input value={name} onChange={(e) => setName(e.target.value)} /> */}

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
      <ButtonCourse>Send Data</ButtonCourse>
    </form>
  );
};
