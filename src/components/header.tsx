export default function Header() {
  return (
    <header className="bg-teal-100">
      <nav className="mx-auto flex h-36 max-w-screen-xl items-center justify-between px-4 py-8">
        <div>Logo</div>
        <ul className="flex gap-6">
          <li>
            <a
              href="#"
              className="before:content relative z-10 before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-teal-950 before:transition-all hover:before:w-2/5 focus:outline-none focus:ring-2 focus:ring-teal-600"
            >
              Amigos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="before:content relative z-10 before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-teal-950 before:transition-all hover:before:w-2/5 focus:outline-none focus:ring-2 focus:ring-teal-600"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#"
              className="before:content relative z-10 before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-teal-950 before:transition-all hover:before:w-2/5 focus:outline-none focus:ring-2 focus:ring-teal-600"
            >
              Contato
            </a>
          </li>
        </ul>
        <ul className="flex gap-6">
          <li>
            <a
              href="#"
              className="before:content relative z-10 before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-teal-950 before:transition-all hover:before:w-2/5 focus:outline-none focus:ring-2 focus:ring-teal-600"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mb-2 me-2 rounded-lg bg-teal-800 px-5 py-4 text-sm font-medium text-white transition duration-200 ease-in-out hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-600"
            >
              Comece já!
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
