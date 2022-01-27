import React, { useState } from "react";
import { sortList } from "../../utils/helpers";
import { UserItem } from "../UserItem/UserItem";

const SORT_PROP = [
  { value: "any", label: "Any" },
  { value: "name", label: "Sort by name" },
  { value: "age", label: "Sort by age" },
];

export const UserList = ({ users, deleteUser }) => {
  const [typeSort, setTypeSort] = useState("any");

  console.log("Re-rendering");

  const sortedArray = sortList(typeSort, users);

  return (
    <>
      <h2>Our emploees</h2>
      <select value={typeSort} onChange={(e) => setTypeSort(e.target.value)}>
        {SORT_PROP.map((item) => (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {users?.length ? (
        sortedArray.map((item, index) => (
          <UserItem
            name={item.name}
            age={item.age}
            role={item.role}
            key={index}
            removeThisUser={deleteUser}
            id={item.id}
            disabled={false}
          />
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>Empty list</h1>
      )}
    </>
  );
};
