import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <input type="email" placeholder="이메일" className="border rounded px-4 py-2" required />
      <textarea placeholder="메시지" className="border rounded px-4 py-2" rows={4} required />
      <Button type="submit">Send</Button>
    </form>
  );
}
