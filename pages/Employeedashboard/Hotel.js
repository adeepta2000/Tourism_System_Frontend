import Link from "next/link";
import dynamic from 'next/dynamic'
import NavBar from "../Layout/navbar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
 
 
const Title = dynamic(() => import('../Layout/title'), {
  ssr: false,
})
 
 
export default function Hotel() {
  const [jsonData, setJsonData] = useState(null);
   
  useEffect(() => {
    fetchData();
  }, []);
 
  async function fetchData() {
    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/employee/Hotellist", {
        withCredentials: true
      });
      
      const jsonData = response.data;
      console.log(jsonData)
      setJsonData(jsonData);
    } catch (error) {
      console.error(error);
    }
  }
 
  return (
    <>
      <Title page="Dashboard" />
      <NavBar />
      <h1 className="text-2xl font-bold text-gray-800 mt-5 mb-3 text-center">
        All Packages
      </h1>
      <br />
      <br />
      {jsonData && jsonData.result ? (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>HotelName</th>
                <th>Rating</th>
                <th>PriceRange</th>
                <th>Address</th>
                <th>Description</th>
                <th>employeeId</th>
                
              </tr>
            </thead>
            <tbody>
              {jsonData.result.map((item, index) => (
                <tr className="hover" key={item.id}>
                  <th>{index + 1}</th>
                  <td>{item.HotelName}</td>
                  <td>{item.Rating}</td>
                  <td>{item.PriceRange}</td>
                  <td>{item.Address}</td>
                  <td>{item.Description}</td>
                  <td>{item.departurePoint}</td>
                  <td>{item.employee.email}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </>
  )
}

 