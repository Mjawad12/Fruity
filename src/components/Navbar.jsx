import React from "react";

function Navbar() {
  return (
    <section className="w-full relative md:px-9 px-3 py-3  z-50">
      <div className="mainNav w-full flex justify-between items-center  ">
        <h1 className="font-primary text-5xl font-bold">Fruity</h1>
        <ul className="md:flex hidden justify-between items-center text-[1.1rem] md:gap-12 font-primary font-[500]  gap-6  cursor-pointer [&>li:hover]:text-[#767c69]">
          <li>Shop</li>
          <li>About</li>
          <li>Careers</li>
          <li>Patnership</li>
          <li>Contact</li>
        </ul>
        <div className="flex font-primary text-[1.1rem] justify-between items-center gap-2  [&>h2:hover]:text-[#767c69]  cursor-pointer">
          <h2>My Cart</h2>
          <hr className="h-[1.2rem] bg-black w-[2px] " />
          <h2>Register</h2>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
