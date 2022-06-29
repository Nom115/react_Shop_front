import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <div className="content">
            <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
            </Head>
            <Navbar />
            { children }
            <Footer />
        </div>
    )
  }