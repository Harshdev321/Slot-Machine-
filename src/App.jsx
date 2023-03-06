import React from "react";

import SlotM from './SlotMach';




const App = () => {
return ( <>
   <h1 className="heading_style">
    P Welcome To <span style={{ fontWeight : 'bold'}  }> slot Machine game </span> p {" "}
    </h1>

<div className='slotmachine'>
    <SlotM x='😄'  y='😄' z='😄'/>
    <hr />
    <SlotM x='🍌'  y='😄' z='🍌'/>
    <hr />
    <SlotM x='🍒'  y='😄' z='😄'/>
    <hr />
    <SlotM x='👚'  y='👚' z='🍌'/>
</div>

</>
);
};

export default App;