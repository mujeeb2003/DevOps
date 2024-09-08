import { useState } from 'react'
import './App.css'
import CourseList from './components/CourseList'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    {/* <CourseForm/> */}
    <CourseList />
    </>
    )
  }
  
  export default App
  