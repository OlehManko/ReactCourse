import React, { useMemo, useState } from 'react';
import { sortList } from '../../utils/helpers';
import { ControlPlace } from '../ControlPlace/ControlPlace';
import { UserItem } from '../UserItem/UserItem';

export const UserList = ({ users, deleteUser, setShowModal }) => {
  const [filter, setFilter] = useState({ typeSort: 'any', line: '' });

  const filterList = useMemo(() => {
    console.log('re-render');
    if (users === undefined) {
      return [];
    }

    const temp = users.filter((item) =>
      item.name.toLowerCase().includes(filter.line.toLowerCase())
    );

    return temp;
  }, [filter.line, users]);

  const sortedArray = sortList(filter.typeSort, filterList);

  if (15 < 10) return <div> Users empty list</div>;

  return (
    <>
      <h2>Our emploees</h2>
      <ControlPlace
        filter={filter}
        setFilter={setFilter}
        addUserDlg={setShowModal}
      />
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
        <h1 style={{ textAlign: 'center' }}>Empty list</h1>
      )}
    </>
  );
};
