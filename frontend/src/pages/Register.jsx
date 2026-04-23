import { useState } from "react";
import API from "../api/axios";

export default function Register() {
  const [form, setForm] = useState({
  name: "",
  email: "",
  password: ""
});

  const submit = async () => {
  console.log(form);  // 👈 add this

  try {
    await API.post("/auth/register", form);
    alert("Registered successfully");
  } catch (err) {
    console.log(err.response.data);  // 👈 IMPORTANT
    alert("Error");
  }
};

  return (
    <div className="container">
      <h2>Register</h2>

      <input
  placeholder="Name"
  onChange={e => setForm({ ...form, name: e.target.value })}
/>

<input
  placeholder="Email"
  onChange={e => setForm({ ...form, email: e.target.value })}
/>

<input
  type="password"
  placeholder="Password"
  onChange={e => setForm({ ...form, password: e.target.value })}
/>
      <button onClick={submit}>Register</button>
    </div>
  );
}