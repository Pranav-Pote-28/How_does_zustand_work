import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useCoursestore = create(
  devtools(
    persist(
      (set) => ({
        courses: [],

        addCourse: (new_course) => {
          set((state) => ({ courses: [new_course, ...state.courses] }));
        },

        removeCourse: (courseId) => {
          set((state) => (
            {courses: state.courses.filter((c) => c.id !== courseId),}
          ));
        },

        toggleCourseStatus: (courseId) => {
          set((state) => ({
            courses: state.courses.map((course) =>
              course.id === courseId
                ? { ...course, completed: !course.completed }
                : course
            ),
          }));
        },
      }),
      { name: "course-storage" } // Local storage key
    )
  )
);

export default useCoursestore;
