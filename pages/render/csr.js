import React from "react"
import { useEffect } from "react"

export default function CSRPage() {
  const [data, setData] = React.useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + "/admin/adminlist");
      const data = await response.json();
      setData(data.result);
    }
    getData();
  })
  return (
    <>
      <h1>This CSR request!</h1>
      <br></br>
      <ul>
        {data.map(item => (
          <li key={item.id}>
         <h1>First Name: {item.firstName}</h1>  
              <p>Last Name: {item.lastName}</p> 
              <p>Username: {item.username}</p>  
              <p>Email: {item.email}</p> 
            </li>
        ))}
      </ul>
    </>
  )
}