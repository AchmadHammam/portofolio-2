"use client";
import Image from "next/image";

export function ContactMe() {
  return (
    <section id="contact">
      <div className="md:grid md:grid-cols-2">
        <div>
          <h1 className="text-[18px] md:text-[40px]">
            Have idea about project?
          </h1>
          <p className="mt-9 text-sm md:text-[16px]">
            Write anything here something about yourself to
          </p>
          <p className="text-sm md:text-[16px]">
            showcase what actually you doing or targeting etc.
          </p>
          <div className="mt-9 flex">
            <a
              href="mailto:ahmadhammam53@gmail.com"
              className="rounded-3xl border-2 border-transparent bg-linear-to-r from-[#FFD49C] to-[#7A87FB] bg-origin-border"
              target="_blank"
            >
              <div className="shrink items-center justify-center rounded-[inherit] bg-linear-to-r from-[#7A87FB] to-[#FFD49C] px-5 py-3 text-sm font-semibold text-black md:shrink-0 md:text-[16px]">
                Send me a message
              </div>
            </a>
          </div>
        </div>
        <div className="hidden justify-end md:flex">
          <Image
            src="/contact_image.svg"
            alt="contact-image"
            width={392.2}
            height={392.2}
          />
        </div>
      </div>
    </section>
  );
}
