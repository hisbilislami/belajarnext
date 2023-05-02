import Link from "next/link";
function about() {
  return (
    <div>
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
      <div>
        <h1 className="text-3xl text-center"> About pages</h1>
      </div>
    </div>
  );
}

export default about;
