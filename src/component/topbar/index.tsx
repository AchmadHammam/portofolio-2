"use client";
import { HiHome } from "react-icons/hi";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

export function TopBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menu = [
    {
      herf: "/#about",
      label: "About",
    },
    {
      herf: "/#project",
      label: "Project",
    },
    {
      herf: "/#contact",
      label: "Contact Me",
    },
  ];
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <nav className="flex min-h-16 flex-row flex-nowrap items-center gap-y-3 px-4 py-3 sm:px-8 xl:justify-between xl:gap-x-4">
      <h1 className="shrink-0 bg-linear-to-r from-[#7A87FB] to-[#FFD49C] bg-clip-text text-lg font-bold text-transparent sm:text-2xl">
        Achmad Hammam
      </h1>
      <div className="invisible flex w-full justify-center lg:visible lg:w-115 lg:flex-1">
        <div className="w-full rounded-3xl border-2 border-transparent bg-linear-to-r from-[#FFD49C] to-[#7A87FB] bg-origin-border lg:max-w-115">
          <div className="flex items-center justify-start rounded-[inherit] bg-[#101111] p-1">
            <div className="flex shrink-0 rounded-3xl bg-[#292929] px-4 py-3 sm:px-5">
              <HiHome className="h-4 w-4" />
            </div>
            <div className="flex w-full items-center justify-around gap-2 px-2 py-2 text-sm text-white sm:justify-between sm:gap-10 sm:px-6 sm:text-base lg:px-9">
              {menu.map((v, index) => (
                <a key={index} href={v.herf}>
                  {v.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-4 flex items-center lg:hidden">
        <div
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          className="h-12 w-15 shrink-0 rounded-3xl border-2 border-transparent bg-linear-to-r from-[#FFD49C] to-[#7A87FB] bg-origin-border"
        >
          <div className="h-full w-full rounded-[inherit] bg-[#101111]">
            <div className="flex h-full w-full items-center justify-center rounded-[inherit] bg-[#292929] p-2 font-semibold text-white">
              <Icon icon="jam:menu" className="text-xl" />
            </div>
          </div>
        </div>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setIsOpen(false)}
            />
            <div className="fixed top-0 right-0 left-0 z-50 flex h-screen w-60 flex-col items-start gap-4 rounded-md bg-[#292929] px-5 py-15 text-base shadow-md">
              <div className="mb-4 bg-linear-to-r from-[#7A87FB] to-[#FFD49C] bg-clip-text text-xl font-bold text-transparent">
                Achmad Hammam
              </div>
              {menu.map((v, index) => (
                <a onClick={() => setIsOpen(false)} key={index} href={v.herf}>
                  {v.label}
                </a>
              ))}
            </div>
          </>
        )}
      </div>
      <a
        href="mailto:ahmadhammam53@gmail.com"
        target="_blank"
        className="invisible shrink-0 rounded-3xl border-2 border-transparent bg-linear-to-r from-[#FFD49C] to-[#7A87FB] bg-origin-border lg:visible"
      >
        <div className="flex items-center justify-center rounded-[inherit] bg-linear-to-r from-[#7A87FB] to-[#FFD49C] px-4 py-3 font-semibold text-black">
          Hire Me
        </div>
      </a>
    </nav>
  );
}
