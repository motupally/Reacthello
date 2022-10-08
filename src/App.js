import React, { useState } from 'react';
import './App.css';
import NewGoal from './components/NewGoal/NewGoal';
import Goals from './components/Goals';
//import * as serviceWorker from '/'
import { Button } from 'reactstrap';


const App =() => {
    const [courseGoal, setCourseGoal]=useState([
   {id:'cg1', text : 'Finish the course'}, 
   {id:'cg2', text : 'Learn about the course main topic'}, 
   {id:'cg3', text : 'Help other students in the course'},
  ]);
  const addnewGoalHandler=(newGoal)=> {
   //setCourseGoal(courseGoal.concat(newGoal));
   setCourseGoal(prevCourseGoals => prevCourseGoals.concat(newGoal));
  };
  return (
    <div className="course-goals">
      <h1>This is react component</h1>
      <Button color="primary" >First React Button</Button>
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addnewGoalHandler} />
      <Goals g={courseGoal}/>
      </div>
  )};
export default App;
