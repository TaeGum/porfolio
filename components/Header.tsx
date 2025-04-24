export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 mb-12">
      <span className="font-bold text-xl tracking-tight text-gray-900">이태검</span>
      <nav className="flex gap-6">
        <a href="#about" className="hover:underline text-gray-700">About</a>
        <a href="#career" className="hover:underline text-gray-700">Career</a>
        <a href="#projects" className="hover:underline text-gray-700">Projects</a>
        <a href="#contact" className="hover:underline text-gray-700">Contact</a>
      </nav>
    </header>
  );
}
