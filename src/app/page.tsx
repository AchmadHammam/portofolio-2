import { AboutMe } from "@/component/about";
import { ButtomBar } from "@/component/buttomBar";
import { ContactMe } from "@/component/contactMe";
import { Project } from "@/component/project";
import { TopBar } from "@/component/topbar";
import Image from "next/image";

export default function Home() {
  const whatICant = ["Next.js", "Flutter", "Laravel", ".Net"];
  return (
    <main className="w-full xl:py-15">
      <div className="px-4 sm:px-6 md:px-12 xl:px-40">
        <TopBar />
      </div>
      <div className="px-4 sm:px-6 md:px-12 xl:px-40">
        <AboutMe />
      </div>
      <div className="grid grid-cols-4 gap-x-5 border-y border-[#383838] bg-[#101010] py-3 md:pl-11 lg:pl-41">
        {whatICant.map((v, index) => (
          <div
            key={index}
            className="flex w-full flex-row items-center px-2 xl:grid xl:grid-cols-2 xl:px-0"
          >
            <p className="text-base text-white xl:text-[20px]">{v}</p>
            <Image
              className="invisible xl:visible"
              src="/Star.svg"
              alt="bintang"
              width={32}
              height={32}
            />
            <Image
              className="visible xl:invisible"
              src="/Star.svg"
              alt="bintang"
              width={16}
              height={16}
            />
          </div>
        ))}
      </div>
      <div className="px-4 sm:px-6 md:px-12 xl:px-40">
        <Project />
      </div>
      <div className="px-4 sm:px-6 md:px-12 xl:px-40">
        <ContactMe />
      </div>
      <div className="px-4 sm:px-6 md:px-12 xl:px-40">
        <ButtomBar />
      </div>
    </main>
  );
}
