import React from "react";

const Navbar = () => {
  return (
    <nav className="relative bg-white rounded-full py-4 px-3 ">
      <ul className="bg-yellow-400 text-black *:hover:underline *:hover:underline-offset-1 flex ">
        <li className="mx-24">Fasilitas</li>
        <li className="mr-10">Info</li>
        <li className="ml-10">About</li>
        <li className="mx-24">Fauna</li>
      </ul>
      {/* logo */}
      <div className="absolute -top-3 left-1/2">
        <img src="src/assets/logo.png" alt="logo" className="size-20"/>
      </div>
    </nav>

  );
};

export default Navbar;
