import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);
  if (!user) return <div>please login</div>;
  return <div>welcome {user.userName}</div>;
}

export default Profile;
