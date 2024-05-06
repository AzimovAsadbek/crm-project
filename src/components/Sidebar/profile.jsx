import React from "react";
import { ProfileContainer } from "./style";
import noimg from "../../assets/images/noUser.webp";

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileContainer.Img src={noimg} />
      <div>
        <ProfileContainer.Name>Asadbek</ProfileContainer.Name>
        <ProfileContainer.Email>1213@gmail.com</ProfileContainer.Email>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
