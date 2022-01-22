import React, { useState, useEffect } from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { UserForm } from './components/UserForm/UserForm';
import { UserItem } from './components/UserItem/UserItem';

const LIST_USERS = [
  { name: 'Alex', age: 42, role: 'admin', id: 1 },
  { name: 'Igor', age: 22, role: 'user', id: 2 },
  { name: 'Oleh', age: 23, role: 'user', id: 3 },
];

function App() {
  const [users, setUsers] = useState([]);

  // const var1 = useSate('')
  // var1[0]
  // var1[1]

  const [caption, setCaption] = useState('');

  useEffect(() => {
    // fetch('url')
    //   .then((data) => data.json())
    //   .then((json) => setUsers(json));
    // Array.isArray();
    // class Array(){
    // static isArray(x){ logic return boolean}
    // static p = 3.14
    // constructor(){}
    // }
    // const arr = new Array([]);
    // arr.method
    let usersFromLS = JSON.parse(localStorage.getItem('user'));

    setUsers(usersFromLS ?? []);
    // setUsers(LIST_USERS);

    // return () => {
    //   localStorage.setItem('data', 'any');
    // };
  }, []);

  useEffect(() => {
    if (users?.length < 2) {
      setCaption('Alarm');
    } else setCaption('');
  }, [users]);

  function deleteUser(userID) {
    // console.log(userID);
    let temp = users.filter((item) => item.id !== userID);
    setUsers(temp);
  }

  const addUser = (newUser) => {
    console.table(newUser);
    let temp = [newUser, ...users];
    setUsers(temp);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(users));
  }, [users]);

  return (
    <div className="App">
      <UserForm createUser={addUser} />

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
          >
            {
              <>
                <h4 style={{ color: 'red' }}>{caption}</h4>
                <h4>Header 2</h4>
              </>
            }
          </UserItem>
        ))
      ) : (
        <h1 style={{ textAlign: 'center' }}>Empty list</h1>
      )}

      {/* <Card /> */}
    </div>
  );
}
export default App;
