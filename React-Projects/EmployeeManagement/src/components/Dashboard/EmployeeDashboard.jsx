import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListTemp'
import TaskList from '../TaskList/TaskList'

//yahan jo employee login hua hai uska data props say ara hai or phir wo employeedashboard pay use hoga 

const EmployeeDashboard = (props) => {
  return (
        
      <div className='p-10 bg-[#1C1C1C] h-screen '>
        <Header changeUser={props.changeUser} data ={props.data} />
        <TaskListNumbers data={props.data}/> 
        <TaskList data={props.data}/>
      </div>
  ) 
}

export default EmployeeDashboard