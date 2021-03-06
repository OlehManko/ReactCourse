import React, { useContext } from 'react';
import { AppContext } from '../context';
import people from '../assets/people2.jpg';

console.log(people);

export const About = () => {
  const { users, deleteUser } = useContext(AppContext);

  const { id, name } = users[0] || { id: 0, name: 'Unknown' };

  return (
    <div>
      About
      <h2>{JSON.stringify(users[0] || { id: 0, name: 'Unknown' })}</h2>
      <h2
        style={{ color: 'red', marginTop: '5rem', cursor: 'pointer' }}
        onClick={() => {
          id && deleteUser(id);
        }}
      >
        {name || 'Unknown'}
      </h2>
      <img src={people} alt="black man" />
    </div>
  );
};
