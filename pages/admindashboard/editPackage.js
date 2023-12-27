import dynamic from 'next/dynamic';
import NavBar from '../Layout/navbar'; 
import Footer from '../Layout/footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Title = dynamic(() => import('../Layout/title'), { ssr: false });

export default function EditPackage() {
  const [packageData, setPackageData] = useState({ name: '', price: '', duration: '', discount: '' });
  const [error, setError] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchPackageData(id);
    }
  }, [id]);

  const fetchPackageData = async (packageId) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/admin/package/${packageId}`);
      setPackageData(response.data);
    } catch (error) {
      console.error('Error fetching package data:', error);
    }
  };

  const handleChange = (e) => {
    setPackageData({ ...packageData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateData();
      setError("Package updated successfully");
    } catch (error) {
      console.error(error);
      setError("An error occurred while updating the package.");
    }
  };

  async function updateData() {
    try {
        const formData = new FormData();
        formData.append('name', packageData.name);
        formData.append('price', packageData.price);
        formData.append('duration', packageData.duration);
        formData.append('discount', packageData.discount);

        let data2 = {
            "name": packageData.name,
            "price": packageData.price,
            "discount": packageData.duration,
            "duration": packageData.discount
          };

      console.log(formData);

      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/admin/updatepackage/${packageData.id}`,data2, {
        withCredentials: true
      });
     
      const data = response.data;
      console.log(data);
      } catch (error) {
        console.error(error);
        throw error;
      }
     }

  return (
    <>
      <Title page="Edit Package" />
      <NavBar />

      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700">Edit Package</h1>
            <br></br>
            <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={packageData.name}
              onChange={handleChange}
              placeholder="Package Name"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="text"
              name="price"
              value={packageData.price}
              onChange={handleChange}
              placeholder="Package Price"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="text"
              name="discount"
              value={packageData.discount}
              onChange={handleChange}
              placeholder="Discount"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="text"
              name="duration"
              value={packageData.duration}
              onChange={handleChange}
              placeholder="Duration"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
        
            {error && <p>{error}</p>}
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update Package
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
