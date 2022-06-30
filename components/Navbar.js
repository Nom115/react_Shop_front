import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
    <nav className="navbar fixed-top navbar-expand-lg bg-white navbar-black shadow-lg p-3 mb-5 rounded">
        <div className="container">
            <div className='row'>
                <div className='col'>
                    <div className='image_wrapper'>

                    
                        <Image className='logo'
                        src="/../public/imgs/big_boss_fashion_logo.gif"
                        alt="Big Boss Fashion Logo"
                        height = "55px"
                        width = "55px"
                        
                        />

                    </div>
                </div>
                <div className='col'>
                <Link href="/">
                <a className="navbar-brand">
                    Big Boss Fashion
                </a>
                </Link>
                </div>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/mens">
                        <a className="nav-link header_text">Mens</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/women">
                        <a className="nav-link header_text">Womens</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/newin">
                        <a className="nav-link header_text">New In</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}