/*import Link from "next/link";
import dynamic from 'next/dynamic'
import NavBar from "../Layout/navbar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
 
 
const Title = dynamic(() => import('../Layout/title'), {
  ssr: false,
})
 
 
export default function TravelGuide( ) {
 
  const [jsonData, setJsonData] = useState(null);
   
    useEffect(() => {
        fetchData();
    }, []);
 
    async function fetchData() {
      try {
           const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/employee/allTravelGuide",
           {
           withCredentials: true
                 }
           );
          const jsonData = response.data;
          console.log(jsonData)
          setJsonData(jsonData);
      } catch (error) {
          console.error(error);
      }
  }
 
  return (
    <>
 
    <Title page="TravelGuide"> </Title>
 
    <NavBar/>
    <h1 >
    All Packages
</h1>
<br></br>
<br></br>
    { jsonData &&
 
 <div className="overflow-x-auto">
 <h1>Destination Details</h1>
 <table className="table">
   <thead>
     <tr>
       <th>ID</th>
       <th>Destination Name</th>
       <th>Address</th>
       <th>Description</th>
       <th>Guide Name</th>
       <th>Contact</th>
       <th>Package Name</th>
       <th>Price</th>
       <th>Guide</th>
     </tr>
   </thead>
   <tbody>
    {jsonData.map((item, index) => (
              <tr className="hover" key={item.id}>
                <th>{index + 1}</th>
                <td>{item.DestinationName}</td>
                <td>{item.Address}</td>
                <td>{item.Description}</td>
                <td>{item.GuideName}</td>
                <td>{item.Contact}</td>
                <td>{item.PackageName}</td>
                <td>{item.Price}</td>
                <td>{item.guide}</td>
              </tr>
            ))}
    </tbody>
  </table>
</div>
 
    }
 
    </>
  )
}

import Link from "next/link";
import dynamic from 'next/dynamic'
import NavBar from "../Layout/navbar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Title = dynamic(() => import('../Layout/title'), {
  ssr: false,
})

export default function TravelGuide() {
  const [jsonData, setJsonData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/employee/allTravelGuide", {
        withCredentials: true
      });

      const jsonData = response.data;

      if (Array.isArray(jsonData)) {
        setJsonData(jsonData);
      } else {
        console.error("Data is not an array:", jsonData);
        setJsonData([]); // Set an empty array as a fallback
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Title page="TravelGuide" />
      <NavBar />
      <h1>All Packages</h1>
      <br></br>
      <br></br>

      {jsonData && Array.isArray(jsonData) && (
        <div className="overflow-x-auto">
          <h1>Destination Details</h1>
          <table className="table">
            <thead>
            <tr>
       <th>ID</th>
       <th>Destination Name</th>
       <th>Address</th>
       <th>Description</th>
       <th>Guide Name</th>
       <th>Contact</th>
       <th>Package Name</th>
       <th>Price</th>
       <th>Guide</th>
     </tr>
            </thead>
            <tbody>
              {jsonData.map((item, index) => (
                <tr className="hover" key={item.id}>
                <th>{index + 1}</th>
                <td>{item.DestinationName}</td>
                <td>{item.Address}</td>
                <td>{item.Description}</td>
                <td>{item.GuideName}</td>
                <td>{item.Contact}</td>
                <td>{item.PackageName}</td>
                <td>{item.Price}</td>
                <td>{item.guide}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}*/

import Link from "next/link";
import dynamic from 'next/dynamic'
import NavBar from "../Layout/navbar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
 
 
const Title = dynamic(() => import('../Layout/title'), {
  ssr: false,
})
 
 
export default function TravelGuide( ) {
 
  const [jsonData, setJsonData] = useState(null);
   
    useEffect(() => {
        fetchData();
    }, []);
 
    async function fetchData() {
      try {
           const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "employee/allTravelGuide",
           {
           withCredentials: true
                 }
           );
          const jsonData = response.data;
          console.log(jsonData)
          setJsonData(jsonData);
      } catch (error) {
          console.error(error);
      }
  }
 
  return (
    <>
 
    <Title page="Dashboard"> </Title>
 
    <NavBar/>
    <h1 class="text-2xl font-bold text-gray-800 mt-5 mb-3 text-center">
    All Packages
</h1>
<br></br>
<br></br>
    { jsonData &&
 
    <div className="overflow-x-auto">
  <table className="table">
    <thead>
        <th></th>
       <th>Destination Name</th>
       <th>Address</th>
       <th>Description</th>
       <th>Guide Name</th>
       <th>Contact</th>
       <th>Package Name</th>
       <th>Price</th>
       <th>guide</th>
      
    </thead>
    <tbody>
    {jsonData.map((item, index) => (
              <tr className="hover" key={item.id}>
              <th>{index + 1}</th>
                <td>{item.DestinationName}</td>
                <td>{item.Address}</td>
                <td>{item.Description}</td>
                <td>{item.GuideName}</td>
                <td>{item.Contact}</td>
                <td>{item.PackageName}</td>
                <td>{item.Price}</td>
                <td>{item.guide.firstname}</td>
              </tr>
            ))}
    </tbody>
  </table>
</div>
 
    }
 
    </>
  )
}