import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CLOSE_MODAL, OPEN_LOADER } from '../utils/constants';

export const UserCard = ({ setShowModal }) => {
  const [user, setUser] = useState(undefined);
  const { id } = useParams();

  console.log('re-render', id);

  useEffect(() => {
    setShowModal(OPEN_LOADER);
    fetch(process.env.REACT_APP_API + `/users/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setUser(json);
        setShowModal(CLOSE_MODAL);
      })
      .catch((error) => {
        console.log(error);
        setShowModal(CLOSE_MODAL);
      });
  }, [id]);

  //   if (!user) return <h2>Loading ... </h2>;

  return (
    <div>
      <h2>{`I got this id: ${id}`}</h2>
      {user ? <p>{JSON.stringify(user)}</p> : <p>We are loading data...</p>}
    </div>
  );
};
