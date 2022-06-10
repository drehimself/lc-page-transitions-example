import Link from 'next/link';

export default function Layout({ children }) {
  function handlePageTransition() {
    if (!document.createDocumentTransition) {
      return;
    }

    const transition = document.createDocumentTransition();
    transition.start();
  }

  return (
    <>
      <nav className="navigation">
        <Link href="/">
          <a onClick={handlePageTransition}>Home</a>
        </Link>
        <Link href="/about">
          <a onClick={handlePageTransition}>About</a>
        </Link>
        <Link href="/contact">
          <a onClick={handlePageTransition}>Contact</a>
        </Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
