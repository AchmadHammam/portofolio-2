export function AboutMe() {
  return (
    <section
      className="bg-[#101010] pt-8 text-white xl:my-0 xl:px-8"
      id="#about"
    >
      <div className="hidden grid-cols-6 grid-rows-6 sm:grid">
        {/* Grid cell */}
        {Array.from({ length: 36 }, (_, index) => {
          const row = Math.floor(index / 6);
          const col = index % 6;

          if (row === 1 && col === 1) {
            return (
              <div
                key={index}
                className="col-span-4 row-span-3 flex flex-col items-center justify-center border border-[#383838] bg-[#101010] px-6 py-4 text-center"
              >
                <h1 className="text-base font-medium md:text-3xl">
                  I build digital experiences that feel smooth, useful, and
                  memorable.
                </h1>
                <p className="mt-6 max-w-lg text-sm md:text-lg">
                  I create modern, reliable applications with clean code, and a
                  focus on real user impact.
                </p>
                <a
                  href="mailto:ahmadhammam53@gmail.com"
                  target="_blank"
                  className="mt-4 w-43.75"
                >
                  <div className="scale-75 lg:scale-100">
                    <div className="w-full rounded-3xl border-2 border-transparent bg-linear-to-r from-[#FFD49C] to-[#7A87FB] bg-origin-border">
                      <div className="flex h-13 w-full items-center justify-center rounded-[inherit] bg-linear-to-r from-[#7A87FB] to-[#FFD49C] px-3.5 py-5 font-semibold text-black">
                        Hire Me
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          }

          // Jangan render sel yang sudah ditempati hero
          if (row >= 1 && row <= 3 && col >= 1 && col <= 4) {
            return null;
          }

          return (
            <div key={index} className="min-h-20 border border-[#383838]" />
          );
        })}
      </div>
      <div className="grid grid-cols-4 grid-rows-6 sm:hidden">
        {/* Grid cell */}
        {Array.from({ length: 24 }, (_, index) => {
          const row = Math.floor(index / 4);
          const col = index % 4;

          if (row === 1 && col === 0) {
            return (
              <div
                key={index}
                className="col-span-4 col-start-1 row-span-3 row-start-2 flex flex-col items-center justify-center border border-[#383838] bg-[#101010] px-6 py-4 text-center"
              >
                <h1 className="shrink-0 text-lg font-medium md:text-3xl">
                  I build digital experiences that feel smooth, useful, and
                  memorable.
                </h1>
                <p className="mt-6 max-w-lg text-sm md:text-lg">
                  I create modern, reliable applications with clean code, and a
                  focus on real user impact.
                </p>
                <a
                  href="mailto:ahmadhammam53@gmail.com"
                  target="_blank"
                  className="mt-4 w-43.75"
                >
                  <div className="w-full rounded-3xl border-2 border-transparent bg-linear-to-r from-[#FFD49C] to-[#7A87FB] bg-origin-border text-sm font-medium">
                    <div className="flex h-13 w-full items-center justify-center rounded-[inherit] bg-linear-to-r from-[#7A87FB] to-[#FFD49C] px-3.5 py-5 font-semibold text-black">
                      Hire Me
                    </div>
                  </div>
                </a>
              </div>
            );
          }
          // Jangan render sel yang sudah ditempati hero
          if (row >= 1 && row <= 3) {
            return null;
          }

          return (
            <div key={index} className="min-h-20 border border-[#383838]" />
          );
        })}
      </div>
    </section>
  );
}
