import Image from "next/image";
import Header from "./components/Header"
import About from "./components/About"

export default function Home() {
  return (
    <div>
      <Header/>
      <h1>This is from Homepage</h1>
      <About/>
    </div>
  );
}
