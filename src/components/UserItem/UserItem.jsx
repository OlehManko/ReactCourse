import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_CONTACT } from '../../utils/constants';
import { ButtonCourse } from '../Button/ButtonCourse';
import './UserItem.css';

// export const UserItem = (props) => {
//   const { name: nameNew, age, role } = props;

export const UserItem = ({
  name: nameNew,
  age,
  role = 'defaultValue',
  removeThisUser,
  id,
  ...props
}) => {
  const state = age < 20;
  return (
    <div className="user-item">
      <h3>
        Name: <span>{nameNew}</span>{' '}
        <Link to={ROUTE_CONTACT}>go to contact</Link>
      </h3>
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
