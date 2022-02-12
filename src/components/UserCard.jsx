import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const UserCard = () => {
  const [user, setUser] = useState(undefined);
  const { id } = useParams();

  console.log('re-render', id);

  useEffect(() => {
    fetch(process.env.REACT_APP_API + `/users/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setUser(json);
      })
      .catch((error) => console.log(error));
  }, [id]);

  //   if (!user) return <h2>Loading ... </h2>;

  return (
    <div>
      <h2>{`I got this id: ${id}`}</h2>
      {user ? <p>{JSON.stringify(user)}</p> : <p>We are loading data...</p>}
    </div>
  );
};
