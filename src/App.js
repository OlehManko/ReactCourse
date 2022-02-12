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
  ROUTE_PRODUCT,
  ROUTE_USERCARD,
} from './utils/constants';
import { LoaderCourse } from './components/Loader/Loader';
import { AppContext } from './context';
import { PrivateRoute } from './components/PrivateRoute';
import { Product } from './components/Product';
import { UserCard } from './components/UserCard';

// console.log(process.env.REACT_APP_KEY);

const LIMIT_PAGE = 2;

function App() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState(() => []);
  const [isAuth, setAuth] = useState('');
  const [page, setPage] = useState(1);

  const [isShowModal, setShowModal] = useState(CLOSE_MODAL);

  useEffect(() => {
    setShowModal(OPEN_LOADER);
    fetch(
      process.env.REACT_APP_API + `/users?_limit=${LIMIT_PAGE}&_page=${page}`
    )
      .then((response) => {
        // console.log(response.headers.get('x-total-count'));
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
  }, [page]);

  function deleteUser(userID) {
    let temp = users.filter((item) => item.id !== userID);
    setUsers(temp);
  }

  const addUser = (newUser) => {
    let temp = [newUser, ...users];
    setUsers(temp);
    setShowModal(CLOSE_MODAL);
  };

  const closeMdl = () => {
    setShowModal(CLOSE_MODAL);
  };

  return (
    <AppContext.Provider value={{ users, addUser, deleteUser, roles, isAuth }}>
      <div className="App">
        <HeaderCourse />

        <Routes>
          <Route
            path={ROUTE_MAIN}
            element={<UserList setShowModal={setShowModal} />}
          />
          <Route
            path={ROUTE_CONTACT}
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />

          <Route path={ROUTE_ABOUT} element={<About />} />
          <Route path={ROUTE_PRODUCT} element={<Product />} />
          <Route path={ROUTE_USERCARD + ':id'} element={<UserCard />} />
          <Route path="*" element={<h2>Something went wrong :(</h2>} />
        </Routes>
        <div>
          <button onClick={() => setPage(1)} style={{ marginRight: '2rem' }}>
            1
          </button>
          <button onClick={() => setPage(2)}>2</button>
        </div>

        <ModalCourse show={isShowModal} close={closeMdl}>
          {isShowModal === OPEN_FORM && <UserForm />}
          {isShowModal === OPEN_LOADER && <LoaderCourse />}
        </ModalCourse>
      </div>
    </AppContext.Provider>
  );
}
export default App;

// const obj = { typeSort: 'name', line: '' };

// console.log(Object.keys(obj).includes('line1'));

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
