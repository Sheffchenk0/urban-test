import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const Profile = () => {
  const userName = useSelector((state) => state.userName);
  return <div>{userName ? <h1>{userName}</h1> : <Redirect to="/" />}</div>;
};

export default Profile;
