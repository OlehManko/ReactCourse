import React, { useState, useEffect } from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { UserForm } from './components/UserForm/UserForm';
import { UserItem } from './components/UserItem/UserItem';

const LIST_USERS = [
  { name: 'Alex', age: 42, role: 'admin' },
  { name: 'Igor', age: 22, role: 'user' },
  { name: 'Oleh', age: 23, role: 'user' },
];

function App() {
  const [users, setUsers] = useState([]);

  const [caption, setCaption] = useState('');

  useEffect(() => {
    // fetch('url')
    //   .then((data) => data.json())
    //   .then((json) => setUsers(json));

    setUsers(LIST_USERS);

    // return () => {
    //   localStorage.setItem('data', 'any');
    // };
  }, []);

  useEffect(() => {
    let temp = [...users];
    temp.push([]);
    setUsers(temp);

    if (users.length < 2) {
      setCaption('Alarm');
    } else setCaption('');
  }, [users]);

  function clickHAndler() {
    console.log("It's click");
    localStorage.setItem('data', 'something');
    // localStorage.clear();
  }

  return (
    <div className="App">
      <UserForm createUser={setUsers} />
      {users.map((item, index) => (
        <UserItem
          name={item.name}
          age={item.age}
          role={item.role}
          key={index}
          printCons={clickHAndler}
          disabled={false}
        >
          {
            <>
              <h4 style={{ color: 'red' }}>{caption}</h4>
              <h4>Header 2</h4>
            </>
          }
        </UserItem>
      ))}

      {/* <Card /> */}
    </div>
  );
}
export default App;
