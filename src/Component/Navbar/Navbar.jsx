import React from "react";

const Navbar = () => {
  return (
    // <nav className="relative bg-white rounded-full py-4 px-3 ">
    //   <ul className="bg-yellow-400 text-black *:hover:underline *:hover:underline-offset-1 flex ">
    //     <li className="mx-24">Fasilitas</li>
    //     <li className="mr-10">Info</li>
    //     <li className="ml-10">About</li>
    //     <li className="mx-24">Fauna</li>
    //   </ul>
    //   {/* logo */}
    //   <div className="absolute -top-3 left-1/2">
    //     <img src="src/assets/logo.png" alt="logo" className="size-20"/>
    //   </div>
    // </nav>
    <nav className="relative w-[570px] mt-14 bg-[#D9D9D9] rounded-full py-4 px-3">
      <div className="flex items-center justify-between ">
        <div className="flex-1 text-center text-black hover:underline hover:underline-offset-1">Info</div>
        <div className="flex-1 text-center text-black hover:underline hover:underline-offset-1 mr-16">Fasilitas</div>

        <div className="flex justify-center items-center absolute left-1/2 transform -translate-x-1/2 bg-black rounded-full w-24 h-24 ">
          <img src="src/assets/logo.png" alt="logo" className="m-4" />
        </div>

        <div className="flex-1 text-center text-black hover:underline hover:underline-offset-1 ml-16">Fauna</div>
        <div className="flex-1 text-center text-black hover:underline hover:underline-offset-1">About</div>
      </div>
    </nav>



  );
};

export default Navbar;
