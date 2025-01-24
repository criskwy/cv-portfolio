function PersonalInfo() {
  return (
    <>
<section className="flex columns-2 justify-evenly mt-8 mb-4 bg-blue-300 rounded-xl p-4 shadow-md overflow-hidden min-w-[745px]">

<div className="flex justify-center flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-28"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>

        <p className="font-medium text-2xl">Cristian Leon</p>
      </div>

      <div className="flex justify-end font-outfit">
      <ul>
        <li>Teléfono: 0000-0000</li>
        <li>Edad: 37 años</li>
        <li>Fecha de nacimiento: 01/05/1988</li>
        <li>Nacionalidad: Guatemalteco</li>
        <li>DPI: 2713952220101</li>
        <li>Email: cristian.leon0588@gmail.com</li>
      </ul>
      </div>
</section>
      
    </>
  );
}

export default PersonalInfo;
