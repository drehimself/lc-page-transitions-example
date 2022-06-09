import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <nav className="navigation">
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
      <main>{children}</main>
    </>
  );
}
