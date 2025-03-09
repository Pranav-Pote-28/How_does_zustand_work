import useCoursestore from "../app/courseStore";
import React from "react";

const CourseList = () => {
  
    const courses = useCoursestore((state) => state.courses);
    const removeCourse = useCoursestore((state) => state.removeCourse);
    const toggleCourseStatus = useCoursestore((state) => state.toggleCourseStatus);

  return (
    <ul>
      {courses.map((course) => (
        <li
          key={course.id}
          className="course-item"
          style={{ backgroundColor: course.completed ? "#00FF0044" : "white" }}
        >
          <span className="course-item-col-1">
            <input
              type="checkbox"
              checked={course.completed}
              onChange={(e) => toggleCourseStatus(course.id)}
            />
          </span>
          <span style={{color:"black"}}>{course.title}</span>
          <button onClick={() => removeCourse(course.id)} className="delete-btn">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
