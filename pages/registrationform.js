import { useState } from 'react';
import Title from "./Layout/title";
import axios from 'axios'; 
import Footer from './Layout/footer';


 export default function Registration(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation
    if (!firstName || !lastName || !username || !email || !address || !password || !file) {
      console.log(firstName, lastName, username, email, address, password, file);
      setError('All fields are required');
    } else {
     
    try {
      await postData()
      setError("Employee created successfully");
      resetForm();

    } catch (e) {
      setError(e);
    }
      
    }
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setUserName('');
    setEmail('');
    setAddress('');
    setPassword('');
    setError('');
  
    const fileInput = document.getElementById('profilepic');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  async function postData() {
    try {
      const formData = new FormData();
      formData.append('firstname', firstName);
      formData.append('lastname', lastName);
      formData.append('username', username);
      formData.append('email', email);
      formData.append('address', address);
      formData.append('password', password);
      formData.append('profilepic', file);
      console.log(formData);

      const response = await axios.post(process.env.NEXT_PUBLIC_API_ENDPOINT + '/employee/createEmployee/', formData, {
       headers: {
         'Content-Type': 'multipart/form-data'
     }
      });

      /*console.log(formData);
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/agent/create`, formData, {
       headers: {
         'Content-Type': 'application/json'
     }
      });*/
     
      const data = response.data;
      console.log(data);
      } catch (error) {
      console.error(error);
      }
     }

    return(
        <>

<Title page="Registration"> </Title>

        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700">Registration</h1>
            <br></br>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    
                    <input type="text" name="firstName" value={firstName} onChange={handleChangeFirstName} placeholder="First Name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                    
                    <input type="text" name="lastName" value={lastName} onChange={handleChangeLastName} placeholder="Last Name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                   
                    <input type="text" name="username" value={username} onChange={handleChangeUserName} placeholder="Username" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                    
                    <input type="email" name="email" value={email} onChange={handleChangeEmail} placeholder="Email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                   
                    <input type="text" placeholder="Enter Address" name="address" value={address} onChange={handleChangeAddress}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                    
                    <input type="password" placeholder="Password" name="password" value={password} onChange={handleChangePassword}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                <input type="file" name="profilepic" id="profilepic" onChange={handleChangeFile}  className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                </div>
                {error && <p>{error}</p>}
                <div>
                    <button type="submit" className="w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
                </div>
                <span>Already have an account ?
                    <a href="loginform" className="text-blue-600 hover:text-blue-800 hover:underline">Login</a></span>
            </form>
        </div>
    </div>
    <Footer/>
        </>
    )
 }