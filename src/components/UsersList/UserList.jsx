import React from 'react';
import { UserItem } from '../UserItem/UserItem';

export const UserList = ({ users, deleteUser }) => {
  return (
    <>
      <h2>Our emploees</h2>
      {users?.length ? (
        users.map((item, index) => (
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
        <h1 style={{ textAlign: 'center' }}>Empty list</h1>
      )}
    </>
  );
};
