import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HeaderCourse } from './components/Header/Header';
import { ModalCourse } from './components/Modal/Modal';
import { UserForm } from './components/UserForm/UserForm';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { UserList } from './components/UsersList/UserList';
import {
  CLOSE_MODAL,
  OPEN_FORM,
  OPEN_LOADER,
  ROUTE_ABOUT,
  ROUTE_CONTACT,
  ROUTE_MAIN,
} from './utils/constants';
import { LoaderCourse } from './components/Loader/Loader';

// console.log(process.env.REACT_APP_KEY);

function App() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  const [isShowModal, setShowModal] = useState(CLOSE_MODAL);

  useEffect(() => {
    setShowModal(OPEN_LOADER);
    fetch(process.env.REACT_APP_API + '/users?_limit=10')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        let temp = json.map((item) => ({
          name: item.name,
          age: parseInt(item.address?.suite.split(' ')[1]),
          role: item.company.name,
          id: item.id,
        }));
        setUsers(temp);
        let rolesCandidate = temp.map((item) => item.role);
        setRoles(rolesCandidate);
        setShowModal(CLOSE_MODAL);
      })
      .catch((error) => console.log(error));
  }, []);

  // useEffect(() => {
  //   let rolesCandidate = users.map((item) => item.role);
  //   setRoles(rolesCandidate);
  // }, [users]);

  function deleteUser(userID) {
    let temp = users.filter((item) => item.id !== userID);
    setUsers(temp);
  }

  const addUser = (newUser) => {
    let temp = [newUser, ...users];
    setUsers(temp);
    setShowModal(0);
  };

  const closeMdl = () => {
    setShowModal(0);
  };

  return (
    <div className="App">
      <HeaderCourse />

      <Routes>
        <Route
          path={ROUTE_MAIN}
          element={
            <UserList
              users={users}
              deleteUser={deleteUser}
              setShowModal={setShowModal}
            />
          }
        />
        <Route path={ROUTE_CONTACT} element={<Contact />} />
        <Route path={ROUTE_ABOUT} element={<About />} />
        <Route path="*" element={<h2>Something went wrong :(</h2>} />
      </Routes>

      <ModalCourse show={isShowModal} close={closeMdl}>
        {isShowModal === OPEN_FORM && (
          <UserForm createUser={addUser} roles={roles} />
        )}
        {isShowModal === OPEN_LOADER && <LoaderCourse />}
      </ModalCourse>
    </div>
  );
}
export default App;

// const obj = { typeSort: 'name', line: '' };

// const newObj = { ...obj, line: 'Lesya' };

// console.table(obj);
// console.table(newObj);

// const { typeSort } = obj
// console.log(typeSort);

// let a = 0; //null undefined
// let a1 = a ?? 10;

// console.log(a1 ? 'TRUE' : 'FALSE', a1);

// let b = [];
// let b1 = (b || []).length;
// console.log(b1 ? 'TRUE' : 'FALSE', b1);

// let a = 10;

// a < 10 && console.log('QQQ');

// console.log('ANY code');
