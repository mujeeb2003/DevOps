import React, { useState } from 'react'
import courses from './courses.json'
import { course } from './types'
import CourseForm from './CourseForm'

export default function CourseList() {
    // event to get course
    const [offCrs,setoffCrs] = useState<course[]>([]);
    const [msg, setmsg] = useState("")
    const [show, setshow] = useState("All");

    

    const getCourse=(course:course)=>{
        console.log(`CourseList: `+course)
        Object.keys(course).length === 1 
        ? setmsg("Course Not Found") 
        : offCrs.some(o => o.code===course.code) //used to check if the value is already in the array
        ? setmsg("Course Already Registered")
        : setoffCrs([...offCrs,course])
    }

    const handleClick=(code:string)=>{
        //
        setoffCrs(offCrs.map(c => c.code === code ? {...c,reg:!c.reg}:c))
    }

    let courses = show === "Reg"
        ? offCrs.filter(o=>o.reg)
        : show === "Off"
        ? offCrs.filter(o=>!o.reg)
        : offCrs

  return (
    <div>
        <div style={{color:'red'}}>{msg}</div>
        <div><CourseForm getCourse={getCourse} / ></div>
        {/* {offCrs.length !== 0 && offCrs.map(o => <div key=
        {o.courseid} 
        style={{cursor:'pointer',color:o.reg ? `blue` : `#d3d3d3`}}
        onClick={()=>{handleClick(o.code)}}
        >{o.title}</div>)} */}
        {offCrs.length !== 0 && courses.map(o => <div key={o.courseid} //it is used to give each item of the list a unique key. 
        style={{cursor:'pointer',color:o.reg ? `blue` : `#d3d3d3`}}
        onClick={()=>{handleClick(o.code)}}
        >{o.title}</div>)}

        <div>
            <button onClick={()=>setshow("All")}>All</button>
            <button onClick={()=>setshow("Reg")}>Reg</button>
            <button onClick={()=>setshow("Off")}>Off</button>
        </div>
    </div>
  )
}
