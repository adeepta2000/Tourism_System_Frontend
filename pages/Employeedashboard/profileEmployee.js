import Link from 'next/link';
import dynamic from 'next/dynamic'
import NavBar from "../Layout/navbar";
 
const Title = dynamic(() => import('../Layout/title'), {
  ssr: false,
})
 
 
export default function profileEmployee( ) {
 
 
  return (
    <>
 
    <Title page="Profile"> </Title>
 
    <NavBar/>
    <br/>
 <Link  className="link link-primary" href="/Employeedashboard/profile">Employee Profile</Link>
    <br/>
    <br/>
    <Link  className="link link-primary" href="/Employeedashboard/Transport">ALL Transport</Link>
  
 <br/>
 <br/>
<Link  className="link link-primary" href="/Employeedashboard/TravelGuide">ALL TravelGuide</Link>
<br/>
 <br/>
 <Link  className="link link-primary" href="/Employeedashboard/Hotel">ALL Hotel</Link>
<br/>
 
 
 
    </>
  )
}