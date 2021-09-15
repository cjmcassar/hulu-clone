import Image from "next/image";

function Header() {
  return (
    // https://youtu.be/MqDlsjc8GLo?t=2234
    <header className="">
      <h1>This is the header</h1>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        classname="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
