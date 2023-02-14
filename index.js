// Hot Module Reloading
//File Watcher Algorithm - C++

import React from "react";
import  ReactDOM  from "react-dom/client";


const title = (
  <h1 id="title"
   key="h2">
    <a href="/">Food Villa</a>
    </h1>
);

 const Body = () => {
  return <h4>Body</h4>
 }

 const Footer = () => {
  return <h4>Footer</h4>
 }

const AppLayout = () => {
  return(
    <div>
    <HeaderComponent />
    <Body />
    <Footer />
    </div>
  )
}

const HeaderComponent = () =>{
  return(
    <div className="header">
      {title}
      <div className="nav-items">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">Cart</a></li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);