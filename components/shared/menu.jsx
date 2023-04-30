export default function MenuComponent({ additionalInformation }) {
  return (
    <div>
      <ul class="flex">
        <li class="ml-2 p-2">
          <a href="/">Home</a>
        </li>
        <li class="ml-2 p-2">
          <a href="/profile">Profile</a>
        </li>
        <li class="ml-2 p-2">
          <a href="/about">About</a>
        </li>
        <li class="ml-2 p-2">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
