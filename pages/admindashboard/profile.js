import Link from "next/link";
import dynamic from 'next/dynamic'
import NavBar from "../Layout/navbar";

const Title = dynamic(() => import('../Layout/title'), {
  ssr: false,
})


export default function Profile( ) {

 
  return (
    <>

    <Title page="Profile"> </Title>
  
    <NavBar/>

<Link  className="link link-primary" href="/admindashboard/alladmin">ALL Admin</Link>
<br/>
 <br/>
<Link  className="link link-primary" href="/admindashboard/allmanager">ALL Manager</Link>
<br/>
 <br/>


  
    </>
  )
}