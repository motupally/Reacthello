import React from 'react';
import './NewGoal.css'
 const NewGoals=props=>{
     const addGoalHandler = event => {
         event.preventDefault();

         const newGoal ={
             id: Math.random().toString(),
             text:'My New Goal'
             
         };
         props.onAddGoal=(newGoal);
 
     };
     return( <form className='new-goal'onSubmit={addGoalHandler}>
         <input type="text"/>
         <button type="button">Add</button>
     </form>
     );
 };

export default NewGoals;