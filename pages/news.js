import dynamic from "next/dynamic";

const Layout = dynamic(() => import('./Layout/layout'), {
  ssr: false,
})

const Title = dynamic(() => import('./Layout/title'), {
  ssr: false,
})

export default function News(){
    return(
        <>

<Title page="News"> </Title>

<Layout>

        <h1>This is News Page</h1>
        <br></br>
<br></br>
<br></br>
<br></br>
        </Layout>
        </>
    )
}