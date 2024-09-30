import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <br /><h1>This is Homepage</h1>
    <Link href={"./about"}></Link>
    <Link href={"/"}></Link>
    <Link href={"/footer"}></Link>
    <Link href={"/contact"}></Link>
    </>
  );
}
