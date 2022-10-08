import React from 'react';
import './Goals.css'
const Goals = props=> {
  console.log(props.g);
    return(
        <ul className="goal-list">
         {props.g.map(g =>{
           return<li key={g.id}>{g.text}</li>
         }

         )}
      </ul>

    );
};
export default Goals;