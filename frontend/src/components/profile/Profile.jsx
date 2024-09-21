import React, { useEffect, useState } from "react";
import axios from "axios";
const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({});
  const userId = localStorage.getItem("userId");

  const fetchProfile = async () => {
    try {
      const response = await axios.post("https://backend-kappa-liart.vercel.app/profile", {
        userId,
      });
      setProfileInfo(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div className="profile-container">
      <h1 className="profile-header">Profile</h1>
      <div className="profile-details">
        <div className="profile-info">
          <label className="profile-label">Email:</label>
          <span className="profile-value">{profileInfo.name}</span>
        </div>
        <div className="profile-info">
          <label className="profile-label">Username:</label>
          <span className="profile-value">{profileInfo.username}</span>
        </div>
        <div className="profile-info">
          <label className="profile-label">Password:</label>
          <span className="profile-value">Protected</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;