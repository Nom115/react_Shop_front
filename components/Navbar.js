import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Link href="/"><h1>Big Boss Fashion</h1></Link>
            </div>
            <Link href="/mens"><a>Mens</a></Link>
            <Link href="/women"><a>Women</a></Link>
            <Link href="/newin"><a>New in</a></Link>
        </nav>
    )
}