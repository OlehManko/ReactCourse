import React, { useState, useEffect } from 'react';
import './App.css';
import { HeaderCourse } from './components/Header/Header';
import { ModalCourse } from './components/Modal/Modal';
import { UserForm } from './components/UserForm/UserForm';
import { UserList } from './components/UsersList/UserList';

const url = 'https://jsonplaceholder.typicode.com/users?_limit=10';

function App() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  const [isShowModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        let temp = json.map((item) => ({
          name: item.name,
          age: parseInt(item.address?.suite.split(' ')[1]),
          role: item.company.name,
          id: item.id,
        }));
        setUsers(temp);
      });
  }, []);

  useEffect(() => {
    let rolesCandidate = users.map((item) => item.role);
    setRoles(rolesCandidate);
  }, [users]);

  function deleteUser(userID) {
    let temp = users.filter((item) => item.id !== userID);
    setUsers(temp);
  }

  const addUser = (newUser) => {
    let temp = [newUser, ...users];
    setUsers(temp);
    setShowModal(false);
  };

  const closeMdl = () => {
    console.log('click to close');
    setShowModal(false);
  };

  return (
    <div className="App">
      <HeaderCourse />
      <UserList
        users={users}
        deleteUser={deleteUser}
        setShowModal={setShowModal}
      />
      <ModalCourse show={isShowModal} close={closeMdl}>
        <UserForm createUser={addUser} roles={roles} />
      </ModalCourse>
    </div>
  );
}
export default App;

// const obj = { typeSort: 'name', line: '' };

// const newObj = { ...obj, line: 'Lesya' };

// console.table(obj);
// console.table(newObj);
