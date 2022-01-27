import React from "react";
import { ButtonCourse } from "../Button/ButtonCourse";
import "./UserItem.css";

// export const UserItem = (props) => {
//   const { name: nameNew, age, role } = props;

export const UserItem = ({
  name: nameNew,
  age,
  role = "defaultValue",
  removeThisUser,
  children,
  id,
  ...props
}) => {
  const state = age < 20;
  // console.table({ nameNew, age, id });
  return (
    <div className="user-item">
      <h3>
        Name: <span>{nameNew}</span>
      </h3>
      <h3>{children}</h3>
      <h3>
        Age: <span>{age}</span> with role:<span>{role}</span>
      </h3>
      <ButtonCourse
        onClick={(e) => removeThisUser(id)}
        variant="danger"
        disabled={state}
      >
        Delete
      </ButtonCourse>
    </div>
  );
};
