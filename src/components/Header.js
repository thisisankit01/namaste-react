import React from "react";

const Title = () =>{
  return(
    <div>
  <h1 id="title" key="h2" className="font-extrabold">
    <a href="/">Zoma'o'</a>
  </h1>
  <p className="text-sm font-extralight text-slate-400">The British Restaurant</p>
  </div>
  );
};

const Header = () => {
  return(
    <div className="grid grid-flow-col justify-items-center py-3 border-solid shadow-md">
      <Title />
      <div className="nav-item flex pt-5 max-sm:hidden">
        <ul className="flex flex-row">
          <li className="px-4"><a href="/">Home</a></li>
          <li className="px-4"><a href="/">About Us</a></li>
          <li className="px-4"><a href="/">Contact</a></li>
        </ul>
     </div> 
      <a className="pt-3 max-sm:hidden"><button className="py-2 bg-red-500 px-8 rounded-md text-white">Cart</button></a>
      <a className="pt-2 sm:hidden"><button data-collapse-toggle="navbar-mobile" className="py-2 bg-red-500 px-4 rounded-md text-white "><svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg></button></a>
    </div>
  );
};

export default Header;