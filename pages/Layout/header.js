import Link from "next/link"

export default function Header(){

return (
    <>
 
{/* <div className="bg-neutral navbar text-neutral-content">
  <div className="navbar-start">
  
    <Link href="/"><img  src="logo3.png" /></Link> 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li> <Link href="about"> About </Link></li>
      
      <li> <Link href="news"> News </Link></li>

      <li> <Link href="faq"> FAQ & Support </Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <ul className="menu menu-horizontal px-1">
    
      <li> <Link className="" href="loginform" > Sign In </Link> </li>

    </ul>
 
  </div>
</div> */}

<div className="navbar bg-accent">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href="about"> About </Link></li>
        <li>
        <Link href="news"> News </Link>
        </li>
        <li><Link href="faq"> FAQ & Support </Link></li>
      </ul>
    </div>
    <Link href="/"><img  src="logo3.png" width="200px"/></Link> 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="about"> About </Link></li>
      <li>
      <Link href="news"> News </Link>
      </li>
      <li><Link href="faq"> FAQ & Support </Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <Link className="" href="loginform" > Sign In </Link>
  </div>
</div>


       </>
)

}