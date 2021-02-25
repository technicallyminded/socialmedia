import React from 'react';
import { useState } from 'react';

const Profile = ({ profileStatus }) => {
  const [profileState, setProfileState] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    profileStatus(profileState);
  };
  const onChange = (e) => {
    setProfileState(e.target.value);
  };
  return (
    <div className='profile-container'>
      <div>Bob</div>
      <img
        width='150'
        height='150'
        src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
      ></img>
      <div>{profileStatus}</div>
      <form onSubmit={onSubmit}>
        <input type='text' value={profileState} onChange={onChange}></input>
        <button type='submit'>Save</button>
      </form>
    </div>
  );
};

export default Profile;
