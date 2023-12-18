import dynamic from "next/dynamic";

const Layout = dynamic(() => import('./Layout/layout'), {
  ssr: false,
})

const Title = dynamic(() => import('./Layout/title'), {
  ssr: false,
})

export default function About(){
    return(
        <>

<Title page="About"> </Title>

<Layout>


        <h1>This is About Page</h1>
        <br></br>
<br></br>
<br></br>
<br></br>
        </Layout>
        </>
    )
}