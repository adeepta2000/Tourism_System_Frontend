export default function SSR({ data }) {
    
    return (
        <>
        <h1>This SSR request!</h1>
        <ul>
          {data.result.map(item => (
            <li key={item.id}>
             <h1>First Name: {item.firstName}</h1>  
              <p>Last Name: {item.lastName}</p> 
              <p>Username: {item.username}</p>  
              <p>Email: {item.email}</p>  
              </li>
          ))}
        </ul>
      </>
    );
    }
    
   export async function getServerSideProps() {
   
        const response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + "/admin/adminlist");
        const data = await response.json();
      
    return { props: { data } }
    }