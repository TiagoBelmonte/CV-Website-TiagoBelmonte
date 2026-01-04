export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">Tiago Belmonte</h1>
      <ul className="flex gap-6">
        <li>
          <a href="#skills" className="hover:text-blue-500">
            Vaardigheden
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-500">
            Projecten
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-500">
            Werkervaring
          </a>
        </li>
      </ul>
    </nav>
  );
}
