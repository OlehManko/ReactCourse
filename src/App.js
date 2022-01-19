import React from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { UserItem } from './components/UserItem/UserItem';

const LIST_USERS = [
  { name: 'Alex', age: 42, role: 'admin' },
  { name: 'Igor', age: 22, role: 'user' },
  { name: 'Oleh', age: 23, role: 'user' },
];

function App() {
  function clickHAndler() {
    console.log("It's click");
  }
  return (
    <div className="App">
      {LIST_USERS.map((item, index) => (
        <UserItem
          name={item.name}
          age={item.age}
          role={item.role}
          key={index}
          onClick={clickHAndler}
          disabled={false}
        />
      ))}
      <Card />
    </div>
  );
}
export default App;