import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../Redux/Actions/profileActions';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth); 
  const [profileState, setProfileState] = useState(authUser);

  useEffect(() => {
    setProfileState(authUser);
  }, [authUser]);

  const handleChange = (e) => {
    setProfileState({
      ...profileState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setProfile(profileState)); 
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={profileState.username || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profileState.email || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="profilePicture">Profile Picture URL:</label>
          <input
            type="text"
            id="profilePicture"
            name="profilePicture"
            value={profileState.profilePicture || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={profileState.bio || ""}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
      <div>
        <h2>Profile Information</h2>
        <img
          src={authUser.profilePicture}
          alt={`${authUser.username}'s profile`}
        />
        <p>Username: {authUser.username}</p>
        <p>Email: {authUser.email}</p>
        <p>Bio: {authUser.bio}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
