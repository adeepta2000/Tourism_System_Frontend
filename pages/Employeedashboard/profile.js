import Link from "next/link";
import dynamic from 'next/dynamic'
import NavBar from "../Layout/navbar";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from "../utils/authcontext";
 
const Title = dynamic(() => import('../Layout/title'), {
  ssr: false,
})
 
export default function profile( ) {
 
  const [profileData, setProfileData] = useState(null);
  const { user } = useAuth();
 
  useEffect(() => {
    if (user) {
      fetchProfileData();
    }
  }, [user]);
 
  async function fetchProfileData() {
    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/employee/getemployee/" + user.email, {
        withCredentials: true
      });
      setProfileData(response.data);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  }
 
 
  return (
    <>
 
    <Title page="Profile"> </Title>
 
    <NavBar/>
 
    <h1 className="text-2xl font-bold text-gray-800 mt-5 mb-3 text-center">
        User Profile
      </h1>
      <br /><br />
 
      {profileData &&
        <div className="profile-container ">
          <img src={process.env.NEXT_PUBLIC_API_ENDPOINT + '/employee/getprofilepic/' + profileData.filename}  height="100px" width="100px"/>
          <p><strong>First Name:</strong> {profileData.firstname}</p>
          <p><strong>Last Name:</strong> {profileData.lastname}</p>
          <p><strong>Username:</strong> {profileData.username}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Address:</strong> {profileData.address}</p>
         
        </div>
}
 
    </>
  )
  
}