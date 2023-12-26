import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
const Layout = dynamic(() => import('./Layout/layout'), {
  ssr: false,
})
const Title = dynamic(() => import('./Layout/title'), {
  ssr: false,
})

export default function Home() {
  return (
    <>

<Title page="Home"> </Title>

<Layout>
<div class=" w-full relative">
  <Image 
  src={"/home4.png"}
  height={0}
  width={0}
  alt=""
  sizes="100vw"
  className="w-full h-[100vh] opacity-60"
  />
  <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
    <p className=" text-6xl ">TOURISM MANAGEMENT SYSTEM</p>
    <br></br>
    <p className=" text-5xl ">"Once a year, go someplace</p>
    <p className=" text-4xl "> you've never been before." - Dalai Lama</p>
  </div>


    </div>

    </Layout>
</>
  )
}
