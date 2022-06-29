import Link from 'next/link'

export default function Navbar() {
    return (
    <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark shadow-lg p-3 mb-5 rounded">
        <div className="container">
            <Link href="/">
            <a className="navbar-brand header_text">
                Big Boss Fashion
            </a>
            </Link>
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