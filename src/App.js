import React, { useState, useEffect } from 'react';
import './App.css';
import { ButtonCourse } from './components/Button/ButtonCourse';
import { ModalCourse } from './components/Modal/Modal';
import { UserForm } from './components/UserForm/UserForm';
import { UserList } from './components/UsersList/UserList';

const url = 'https://jsonplaceholder.typicode.com/users?_limit=10';

function App() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [theme, setTheme] = useState('ligth');

  const [isShowModal, setShowModal] = useState(false);

  const changeTheme = () => {
    document.body.setAttribute('data-theme', theme);
  };

  useEffect(changeTheme, [theme]);

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
    console.table(newUser);
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
      <header>
        <ButtonCourse onClick={() => setShowModal(true)}>Add user</ButtonCourse>
        <ButtonCourse
          onClick={() => setTheme(theme === 'ligth' ? 'dark' : 'ligth')}
        >
          Change theme
        </ButtonCourse>
      </header>
      <UserList users={users} deleteUser={deleteUser} />
      <ModalCourse show={isShowModal} close={closeMdl}>
        <UserForm createUser={addUser} roles={roles} />
      </ModalCourse>
    </div>
  );
}
export default App;
