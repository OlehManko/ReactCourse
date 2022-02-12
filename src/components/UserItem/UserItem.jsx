import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppContext } from '../../context';
import {
  ROUTE_CONTACT,
  ROUTE_PRODUCT,
  ROUTE_USERCARD,
} from '../../utils/constants';
import { ButtonCourse } from '../Button/ButtonCourse';
import './UserItem.css';

// export const UserItem = (props) => {
//   const { name: nameNew, age, role } = props;

export const UserItem = ({
  name: nameNew,
  age,
  role = 'defaultValue',
  id,
  ...props
}) => {
  const { deleteUser } = useContext(AppContext);
  const state = age < 20;
  return (
    <div className="user-item">
      <h3>
        Name: <span>{nameNew}</span>{' '}
        <NavLink to={ROUTE_USERCARD + `${id}`}>go to UserCard</NavLink>
      </h3>
      <h3>
        Age: <span>{age}</span> with role:<span>{role}</span>
      </h3>
      <ButtonCourse
        onClick={(e) => deleteUser(id)}
        variant="danger"
        disabled={state}
      >
        Delete
      </ButtonCourse>
    </div>
  );
};
