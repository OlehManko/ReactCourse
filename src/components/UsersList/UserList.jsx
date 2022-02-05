import React, { useMemo, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { sortList } from '../../utils/helpers';
import { ControlPlace } from '../ControlPlace/ControlPlace';
import { UserItem } from '../UserItem/UserItem';
import './UserList.css';

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

  return (
    <>
      <h2>Our emploees</h2>
      <ControlPlace
        filter={filter}
        setFilter={setFilter}
        addUserDlg={setShowModal}
      />
      {users?.length ? (
        <TransitionGroup className="users-list">
          {sortedArray.map((item, index) => (
            <CSSTransition key={item.id} timeout={500} classNames="item">
              <UserItem
                name={item.name}
                age={item.age}
                role={item.role}
                removeThisUser={deleteUser}
                id={item.id}
                disabled={false}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <h1 style={{ textAlign: 'center' }}>Empty list</h1>
      )}
    </>
  );
};
