import Link from "next/link";
import dynamic from 'next/dynamic'
import NavBar from "../Layout/navbar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
 
 
const Title = dynamic(() => import('../Layout/title'), {
  ssr: false,
})
 
 
export default function Transport() {
  const [jsonData, setJsonData] = useState(null);
   
  useEffect(() => {
    fetchData();
  }, []);
 
  async function fetchData() {
    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/employee/allTransport", {
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
                <th>name</th>
                <th>description</th>
                <th>capacity</th>
                <th>availability</th>
                <th>cost</th>
                <th>departurePoint</th>
                <th>arrivalPoint</th>
                <th>schedule</th>
                <th>facilities</th>
              </tr>
            </thead>
            <tbody>
              {jsonData.result.map((item, index) => (
                <tr className="hover" key={item.id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.capacity}</td>
                  <td>{item.availability}</td>
                  <td>{item.cost}</td>
                  <td>{item.departurePoint}</td>
                  <td>{item.arrivalPoint}</td>
                  <td>{item.schedule}</td>
                  <td>{item.facilities}</td>
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

 