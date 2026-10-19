import { AboutMe } from "@/component/about";
import { ButtomBar } from "@/component/buttomBar";
import { ContactMe } from "@/component/contactMe";
import { Project } from "@/component/project";
import { TopBar } from "@/component/topbar";
import Image from "next/image";

export default function Home() {
  const whatICant = ["Next.js", "Flutter", "Laravel", ".Net"];
  return (
    <main className="relative w-full py-15">
      <div className="px-80">
        <TopBar />
      </div>
      <div className="px-80">
        <AboutMe />
      </div>
      <div className="grid grid-cols-4 border-y border-[#383838] bg-[#101010] py-3 pl-41">
        {whatICant.map((v, index) => (
          <div
            key={index}
            className="grid grid-cols-2 items-center justify-between"
          >
            <p className="text-20 text-white">{v}</p>
            <Image src="/Star.svg" alt="bintang" width={32} height={32} />
          </div>
        ))}
      </div>
      <div className="px-80">
        <Project />
      </div>
      <div className="px-80">
        <ContactMe />
      </div>
      <div className="px-80">
        <ButtomBar />
      </div>
    </main>
  );
}
