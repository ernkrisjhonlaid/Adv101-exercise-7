//Log in Code
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (!storedData) {
      alert("No registered user found. Please register first.");
      router.push("/register");
      return;
    }

    // Check if username & password match together
    if (
      form.username === storedData.username &&
      form.password === storedData.password
    ) {
      //Keep session active
      localStorage.setItem("isLoggedIn", "true");

      //Re-save fullname para makita sa dashboard
      localStorage.setItem("userFullName", storedData.fullname);

      alert(`Welcome back, ${storedData.fullname}!!!`);
      router.push("/dashboard");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
}
