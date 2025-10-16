import { useState, useEffect } from "react";
import ProfileCard from "../components/profilecard";
import React from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      setUser(data.results[0]);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!user)
    return (
      <p className="text-center mt-10 text-red-500">Failed to load user</p>
    );

  return <ProfileCard user={user} />;
};

export default ProfilePage;
