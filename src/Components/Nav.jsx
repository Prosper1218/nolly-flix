import React from "react";

const Nav = () => {
   return (
      <div className="h-[4rem] flex flex-row justify-between items-center px-4 md:px-16 xl:px-28">
         <h1 className="text-2xl sora ">Nolly-Flix</h1>
         <div className="text-xs sora flex fle-row gap-5">
            <p>Home</p>
            <p>About</p>
         </div>
         <input
            type="text"
            placeholder="Search movies"
            className=" sora h-8 rounded-[24px] focus:outline-none w-[14rem] focus:bg-none bg-transparent pl-4 text-xs   shadow-[0px_4px_16px_rgba(0,0,0,0.5),_0px_8px_24px_rgba(0,0,0,0.5),_0px_16px_56px_rgba(0,0,0,0.5)]"
         />
      </div>
   );
};

export default Nav;
