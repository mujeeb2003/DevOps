import React, {KeyboardEvent, useState } from 'react'
import data from './courses.json';
import { CourseFormProps, course } from './types';

export default function CourseForm({getCourse}:CourseFormProps) {
    const [code,setCode] = useState("");

    // we set the types in ts file.
    const [courses, setcourses] = useState<course[]>(data)
    // the event is of keyboard and is on input elemnet
    const handleKeyDown= (e : KeyboardEvent<HTMLInputElement>)=>{
        if(e.code==='Enter'){
            console.log(e.code);
            let course = courses.find(c => c.code === code.toUpperCase())
            console.log(course);
            getCourse({...course ,reg:false} as course);
            // data.find();
        }
    }
    return (
    <div>
        <input type="text"name='code' value={code} onChange={e => setCode(e.target.value)} 
        onKeyDown={handleKeyDown}
        />
    </div>
  )
}
