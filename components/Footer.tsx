/* eslint-disable @next/next/no-img-element */
// components/Footer.tsx
export function Footer() {
  return (
    <footer className="max-w-6xl mx-auto py-8 px-6 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="/vector1.svg" className="w-12 h-12" alt="logo" />
        <span
          className="font-handlee text-[36px] text-primary"
          style={{ WebkitTextStroke: "0.5px #0c0c0c" }}
        >
          taegum
        </span>
      </div>
      <div className="flex gap-8 mt-4 md:mt-0">
        <span
          className="bg-primary text-white font-handlee text-[32px] rounded-md px-6 py-2 shadow-subtle"
          style={{ WebkitTextStroke: "0.5px #fff" }}
        >
          E-mail
        </span>
        <span
          className="bg-primary text-white font-handlee text-[32px] rounded-md px-6 py-2 shadow-subtle"
          style={{ WebkitTextStroke: "0.5px #fff" }}
        >
          LinkedIn
        </span>
        {/* <span className="bg-primary text-white font-handlee text-[32px] rounded-md px-6 py-2 shadow-subtle" style={{ WebkitTextStroke: "0.5px #fff" }}>Instagram</span> */}
      </div>
      {/* <div className="text-primary font-inter text-2xl mt-4 md:mt-0">Copyright. Portfolio 2024</div> */}
    </footer>
  );
}
