import { useState } from "react"

import useCoursestore from "../app/courseStore"

const CourseForm = ()=>{

    const addCourse = useCoursestore((state)=> state.addCourse)
    const [courseTitle, setCourseTitle] = useState("")

    const handleSubmitForm = ()=>{
        if(!courseTitle) return alert("please add a course Title");

        addCourse( {id: Math.ceil(Math.random()*100000), title: courseTitle} )

        setCourseTitle("")
    }

    return (
        <div className="form-container">
            <input onChange={(e)=>{setCourseTitle(e.target.value)}} value={courseTitle} className="form-input" />

            <button onClick={()=>{handleSubmitForm()}} className="form-submit-btn">add Course</button>
        </div>
    )

}

export default CourseForm