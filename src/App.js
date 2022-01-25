import React, { useState, useEffect } from 'react';
import './App.css';
import { ButtonCourse } from './Button/ButtonCourse';
import { ModalCourse } from './components/Modal/Modal';
import { UserForm } from './components/UserForm/UserForm';
import { UserList } from './components/UsersList/UserList';

const LIST_USERS = [
  { name: 'Alex', age: 42, role: 'admin', id: 1 },
  { name: 'Igor', age: 22, role: 'user', id: 2 },
  { name: 'Oleh', age: 23, role: 'user', id: 3 },
];

function App() {
  const [users, setUsers] = useState([]);

  const [isShowModal, setShowModal] = useState(false);

  useEffect(() => {
    setUsers(LIST_USERS);
  }, []);

  function deleteUser(userID) {
    let temp = users.filter((item) => item.id !== userID);
    setUsers(temp);
  }

  const addUser = (newUser) => {
    console.table(newUser);
    let temp = [newUser, ...users];
    setUsers(temp);
    setShowModal(false);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(users));
  }, [users]);

  const closeMdl = () => {
    console.log('click to close');
    setShowModal(false);
  };

  return (
    <div className="App">
      <header>
        <ButtonCourse onClick={() => setShowModal(true)}>Add user</ButtonCourse>
      </header>
      <UserList users={users} deleteUser={deleteUser} />
      <ModalCourse show={isShowModal} close={closeMdl}>
        <UserForm createUser={addUser} />
      </ModalCourse>
    </div>
  );
}
export default App;
