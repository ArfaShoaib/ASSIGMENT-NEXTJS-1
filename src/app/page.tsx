import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/" className="link">
        Home
      </Link>
      <Link href="./about" className="link">
        About
      </Link>
      <Link href="./contact" className="link">
        Contacts
      </Link>
      <Link href="./service" className="link">
        Services
      </Link>
    </div>
  );
}
