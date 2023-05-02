import Link from "next/link";

export default function MenuComponent({ additionalInformation }) {
  return (
    <div>
      <ul className="flex">
        <li className="ml-2 p-2">
          <Link href="/">Home</Link>
        </li>
        <li className="ml-2 p-2">
          <Link href="/profile">Profile</Link>
        </li>
        <li className="ml-2 p-2">
          <Link href="/about">About</Link>
        </li>
        <li className="ml-2 p-2">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
