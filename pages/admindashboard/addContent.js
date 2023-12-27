import dynamic from 'next/dynamic';
import NavBar from '../Layout/navbar'; 
import Footer from '../Layout/footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Title = dynamic(() => import('../Layout/title'), { ssr: false });


export default function AddContent(){

    const [destinations, setDestinations] = useState([]);
    const [formData, setFormData] = useState({
    title: '',
    description: '',
    destination: '',
    admin: ''
  });

    useEffect(() => {
        // Fetch destinations
        const fetchDestinations = async () => {
          try {
            const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/admin/destinations");
            setDestinations(response.data);
          } catch (error) {
            console.error('Error fetching destinations:', error);
          }
        };
        fetchDestinations();
      }, []);   
    


      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post(process.env.NEXT_PUBLIC_API_ENDPOINT + "/admin/content/create", formData,{
            withCredentials: true
          });
          const data = response.data;
      console.log(data);
        } catch (error) {
          console.error('Error creating content:', error);
        }
      };


    return(
        <>

<Title page="Add Content"> </Title>
  
  <NavBar/>

  <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700">Add Content</h1>
            <br></br>
            <form className="space-y-4" onSubmit={handleSubmit}>
           
      <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
      <input
              type="number"
              name="admin"
              value={formData.admin}
              onChange={handleChange}
              placeholder="Admin Id"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
      <select className="select select-primary w-full max-w-xs" name="destinationId" value={formData.destination} onChange={handleChange}>
      <option disabled selected>None</option>
        {destinations.map(destination => (
          <option value={destination.id}>{destination.name}</option>
        ))}
      </select>
      <button
              type="submit"
              className="w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Content
            </button>
    </form>
    </div>
    </div>
        </>
    )
}