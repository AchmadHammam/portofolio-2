import { Icon } from "@iconify/react";
export function ButtomBar() {
  const menu = [
    {
      herf: "www.linkedin.com/in/achmad-hammam-1864b2252",
      label: "eva:linkedin-fill",
    },
    {
      herf: "https://github.com/AchmadHammam",
      label: "famicons:logo-gitlab",
    },
    {
      herf: "https://www.facebook.com/people/Achmad-Hammam/pfbid02b1y9Z7pPnFpvqM7ud2cxqL7UHyFzSdi2KAzKfmoPcoy8Ye7zVmvKuhsnCvYSbysVle",
      label: "basil:facebook-outline",
    },
    {
      herf: "https://x.com/achmad_hammam",
      label: "hugeicons:new-twitter",
    },
  ];
  return (
    <section className="flex h-16 w-full items-center justify-between py-16">
      <h1 className="hidden justify-start bg-linear-to-r from-[#7A87FB] to-[#FFD49C] bg-clip-text text-2xl font-bold text-transparent md:flex">
        Achmad Hammam
      </h1>
      <div className="justify-center w-full md:flex lg:w-[460pt]">
        <div className="w-full rounded-3xl border-2 border-transparent bg-linear-to-r from-[#FFD49C] to-[#7A87FB] bg-origin-border lg:m-21">
          <div className="flex items-center justify-start rounded-[inherit] bg-[#101111] p-1">
            <div className="flex w-full items-center justify-between px-2 py-1 text-[16px] text-white sm:gap-10">
              {menu.map((v, index) => (
                <a
                  key={index}
                  href={v.herf}
                  target="_blank"
                  className="flex rounded-3xl bg-[#292929] px-5 py-3"
                >
                  <Icon icon={v.label} />
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
        <div className="hidden h-13 w-25.75 items-center justify-center rounded-[inherit] bg-linear-to-r from-[#7A87FB] to-[#FFD49C] px-3.5 py-5 font-semibold text-black md:flex">
          Hire Me
        </div>
      </a>
    </section>
  );
}
