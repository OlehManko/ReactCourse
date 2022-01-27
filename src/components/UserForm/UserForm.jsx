import React, { useEffect, useState } from "react";
import { ButtonCourse } from "../../Button/ButtonCourse";
import "./UserForm.css";

export const UserForm = ({ createUser, roles: ROLE_USER = [] }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(33);
  const [role, setRole] = useState("");
  const [isDisabled, setDisabled] = useState(true);

  const changeAge = (e) => {
    let temp = e.target.value;
    setAge(temp);
  };

  const getName = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (name.length > 3 && role.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, role]);

  const handleData = (e) => {
    e.preventDefault();
    const newUser = { name, age, role, id: Date.now() };
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
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <ButtonCourse disabled={isDisabled}>Send Data</ButtonCourse>
    </form>
  );
};
