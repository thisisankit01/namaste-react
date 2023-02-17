import React from "react";
import {restaurantList , searchIcon}  from "../config";
import Restaurantcard from "./RestaurantCard";
import { useState } from "react";


const SearchBar = () => {

    //search text is a local state variable
    const [searchInput , setSearchInput] = useState(""); //to create state variable

  return (
    <div className="grid place-items-center">
    <form className="flex flex-row pt-8 w-3/4 space-x-2">   
    <input 
        type="search" 
        id="default-search" 
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-red-300 dark:bg-gray-700 dark:focus:border-blue-500 focus:outline-none" 
        placeholder="Search Restaurant Food..." required 
        value={searchInput}
        onChange = {(e) => {
          setSearchInput(e.target.value)
        }}
        />
      <button className="py-2 bg-gray-50 px-8 rounded-md font-extralight max-sm:hidden">Search</button>

      <button className="sm:hidden">
      <svg aria-hidden="true" className="w-8 h-8 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </button>
      
</form>
</div>
  )
}

const Body = () => {

  return(
    <>
    <SearchBar />
    <div className="grid grid-row place-items-center">
    <div className="grid grid-cols-4 grid-flow-row gap-6 pt-11 max-w-fit max-sm:grid-cols-1 max-xl:grid-cols-3 max-xl:gap-0 max-md:grid-cols-2">
      {
        restaurantList.map((restaurant) => {
          return <Restaurantcard {...restaurant.data.data} key={restaurant.data.data.id}/>
        })
      }
    </div>
    </div>
    </>
  ) 
 }

 export default Body;