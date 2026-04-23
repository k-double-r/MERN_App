import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    API.get("/courses").then(res => setCourses(res.data));
  }, []);

  const enroll = async (id) => {
    await API.post(`/courses/enroll/${id}`);
    alert("Enrolled!");
  };

  return (
    <>
      {courses.map(c => (
        <div key={c._id}>
          <h3>{c.title}</h3>
          <button onClick={() => enroll(c._id)}>Enroll</button>
        </div>
      ))}
    </>
  );
}