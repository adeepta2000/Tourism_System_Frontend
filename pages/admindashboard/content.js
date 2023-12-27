import Link from "next/link";
import dynamic from 'next/dynamic'
import NavBar from "../Layout/navbar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Title = dynamic(() => import('../Layout/title'), {
    ssr: false,
  })
  
  
  export default function Dashboard( ) {

    const router = useRouter();

  const handleEditClick = (packageId) => {
    router.push(`/admindashboard/editPackage?id=${packageId}`);
  };

  const handleDeleteClick = async (packageId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this package?");
    if (isConfirmed) {
      try {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/admin/deletepackage/${packageId}`, { withCredentials: true });
       
        fetchData();
      } catch (error) {
        console.error('Error deleting package:', error);
      }
    }
  };


    const [jsonData, setJsonData] = useState(null);
    
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
      try {
           const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/admin/contents",
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
 
    <Title page="Content"> </Title>
  
    <NavBar/>
    <h1 class="text-2xl font-bold text-gray-800 mt-5 mb-3 text-center">
    All Contents
</h1>
<br></br>
<button className="btn btn-neutral"><Link className="" href="/admindashboard/addContent" > Add Content </Link></button>
<br></br> 
<br></br> 
    { jsonData &&

    <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Description</th>
        <th>Creation Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {jsonData.map((item, index) => (
              <tr className="hover" key={item.id}>
                <th>{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                <td>
                <button className="btn btn-sm btn-outline btn-primary" onClick={() => handleEditClick(item.id)}>
                  Edit
                </button> |  <button className="btn btn-sm btn-outline btn-error" onClick={() => handleDeleteClick(item.id)}>
                  Delete
                  </button>
                </td>
              </tr>
            ))}
    </tbody>
  </table>
</div>

    }
  
    </>
  )





  }