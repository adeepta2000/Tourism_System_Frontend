import dynamic from "next/dynamic";

const Layout = dynamic(() => import('./Layout/layout'), {
  ssr: false,
})

const Title = dynamic(() => import('./Layout/title'), {
  ssr: false,
})

export default function Faq(){
    return(
        <>

<Title page="FAQ"> </Title>

<Layout>
        <h1>This is FAQ & Support Page</h1>
        <br></br>
<br></br>
<br></br>
<br></br>
        </Layout>
        </>
    )
}