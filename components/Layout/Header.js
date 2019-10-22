import Link from 'next/link';

export default () => (
    <header className="Header bg-gray-300">
        <Link href="/"><img alt="Sport Event Hotels" className="h-40 cursor-pointer" src="/static/logo/svg/logo-transparent.svg" /></Link>
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </nav>
    </header>
);