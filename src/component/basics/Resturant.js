import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from './MenuCard';

const uniqueList = [ ...new Set ( 
  Menu.map((curElem) => {
 return curElem.category;
})
),
];
  console.log(uniqueList);

// you are doing the grreat job
// you can do more
 const Resturant = () => {

    const [menuData, setMenudata] = useState(Menu);

    const filterItem = (category) => {
       const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
       });
       setMenudata(updatedList);
    };
     
  return (
    <> 

    <nav className='navbar'>
      <div className='btn-group'>
        <button className='btn-group__item' onClick={() => filterItem("breakfast")}>BreakFast</button>
        <button className='btn-group__item'  onClick={() => filterItem("lunch")}>Lunch</button>
        <button className='btn-group__item'  onClick={() => filterItem("evening")}>Evening</button>
        <button className='btn-group__item'  onClick={() => filterItem("dinner")}>Dinner</button>
        <button className='btn-group__item'  onClick={() => setMenudata(Menu)}>All</button>
      </div>
    </nav>
    <MenuCard menuData = {menuData} />
    </>
  );
};

export default Resturant;