function Banner() {
  return (
    <div className="bg-gray-500 flex items-center p-0 m-0 justify-between">
      <h1 className="font-semibold text-5xl p-2 m-2 text-white">Banner</h1>
      <nav className="flex justify-around p-0 gap-2 mx-4 text-white ">
        <a
          href="#"
          className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
        >
          Sobre mi
        </a>
        <a
          href="#"
          className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
        >
          Profesión
        </a>
        <a
          href="#"
          className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
        >
          Trabajos
        </a>
        <a
          href="#"
          className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
        >
          Conocimientos
        </a>
      </nav>
    </div>
  );
}

export default Banner;
