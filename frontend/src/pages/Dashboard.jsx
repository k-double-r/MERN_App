import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    API.get("/courses").then(res => setCourses(res.data));
  }, []);

  const enroll = async (id) => {
    await API.post(`/courses/enroll/${id}`);
    alert("Enrolled!");
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      {courses.map(c => (
        <div className="course-card" key={c._id}>
          <h3>{c.title}</h3>
          <p>{c.description}</p>
          <button onClick={() => enroll(c._id)}>Enroll</button>
        </div>
      ))}
    </div>
  );
}