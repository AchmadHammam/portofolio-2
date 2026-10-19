import { HiHome } from "react-icons/hi";

export function TopBar() {
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
  return (
    <nav className="flex h-16 w-full items-center justify-between px-8">
      <h1 className="flex justify-start bg-linear-to-r from-[#7A87FB] to-[#FFD49C] bg-clip-text text-2xl font-bold text-transparent">
        Achmad Hammam
      </h1>
      <div className="flex justify-center lg:w-[460pt]">
        <div className="w-full rounded-3xl border-2 border-transparent bg-linear-to-r from-[#FFD49C] to-[#7A87FB] bg-origin-border lg:m-21">
          <div className="flex items-center justify-start rounded-[inherit] bg-[#101111] p-1">
            <div className="flex rounded-3xl bg-[#292929] px-5 py-3">
              <HiHome className="h-4 w-4" />
            </div>
            <div className="flex w-full items-center justify-between px-9 py-2 text-[16px] text-white sm:gap-10">
              {menu.map((v, index) => (
                <a key={index} href={v.herf}>
                  {v.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <a
        href="mailto:ahmadhammam53@gmail.com"
        target="_blank"
        className="rounded-3xl border-2 border-transparent bg-linear-to-r from-[#FFD49C] to-[#7A87FB] bg-origin-border"
      >
        <div className="flex h-13 w-25.75 items-center justify-center rounded-[inherit] bg-linear-to-r from-[#7A87FB] to-[#FFD49C] px-3.5 py-5 font-semibold text-black">
          Hire Me
        </div>
      </a>
    </nav>
  );
}
