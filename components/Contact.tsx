// components/Contact.tsx
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6" id="contact">
      <div className="bg-accent px-4 py-2 rounded shadow-subtle font-handlee text-[32px] text-primary inline-block mb-8" style={{ WebkitTextStroke: "0.5px #0c0c0c" }}>Contact here</div>
      <div className="text-primary font-inter text-2xl mb-8">Have a project idea?<br />just say me <span className="text-accent4">Hi</span>.</div>
      <form className="flex flex-col gap-6 max-w-xl">
        <input className="border-b-2 border-black font-handlee text-[28px] py-2 outline-none" placeholder="Name" />
        <input className="border-b-2 border-black font-handlee text-[28px] py-2 outline-none" placeholder="Your email" />
        <input className="border-b-2 border-black font-handlee text-[28px] py-2 outline-none" placeholder="About Project" />
        <Button type="submit" className="bg-primary text-white font-inter text-2xl font-semibold py-4 px-14 rounded-md shadow-strong hover:bg-primary/90 transition mt-6">Send Here</Button>
      </form>
    </section>
  );
}
