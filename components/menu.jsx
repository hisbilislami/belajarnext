import Link from "next/link";
export default function Menu() {
  return (
    <div
      className="flex justify-center items-center w-100 p-3"
      style={{ height: "50px", background: "orange" }}
    >
      <ul className="flex">
        <li className="bg-white rounded p-2">
          <Link href="/">Home</Link>
        </li>
        <li className="bg-white rounded p-2 ml-2">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
