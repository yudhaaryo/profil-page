import NameDisplay from "./nameDisplay";
import InfoSection from "./infosection";
import React from "react";

const Profile = ({ user }) => {
  if (!user) return null;

  const personalInfo = [
    { label: "First Name", value: user.name.first },
    { label: "Last Name", value: user.name.last },
    { label: "Date of Birth", value: user.dob.date },
    { label: "Email Address", value: user.email },
    { label: "Phone Number", value: user.phone },
    { label: "Gender", value: user.gender },
  ];

  const addressInfo = [
    { label: "Country", value: user.location.country },
    { label: "City", value: user.location.city },
    { label: "Post Code", value: user.location.postcode },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-gradient-to-r from-green-50 to-white  rounded-xl hover:shadow-lg transition-shadow duration-300  p-6 sm:p-8">
          <img
            src={user.picture.large}
            alt="User Profile"
            className="w-32 h-32 rounded-full border-4 border-green-200 shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <div className="text-center sm:text-left">
            <NameDisplay
              name={user.name}
              gender={user.gender}
              city={user.location.city}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
          <InfoSection title="Personal Information" data={personalInfo} />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
          <InfoSection title="Address" data={addressInfo} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
