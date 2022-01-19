import React from 'react';
import './UserItem.css';

// export const UserItem = (props) => {
//   const { name: nameNew, age, role } = props;

export const UserItem = ({
  name: nameNew,
  age,
  role = 'defaultValue',
  ...props
}) => {
  return (
    <div className="user-item">
      <h3>
        Name: <span>{nameNew}</span>
      </h3>
      <h3>
        Age: <span>{age}</span> with role:<span>{role}</span>
      </h3>
      <button {...props}>Delete</button>
    </div>
  );
};
