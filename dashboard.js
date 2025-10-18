//Dashboard code 

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (!loggedIn || !storedData) {
      router.push("/login");
    } else {
      setUserName(storedData.fullname || "Student");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  return (
    <div className="dashboard">
      <header className="dash-header">
        <h1>Welcome, {userName}! 👋</h1>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </header>

      <div className="dash-content">
        <section className="profile-card">
          <h2>Student Information</h2>
          <p><strong>Name:</strong> {userName}</p>
          <p><strong>Course:</strong> BS Information Technology</p>
          <p><strong>Year Level:</strong> 2nd Year</p>
        </section>

        <section className="announcement-card">
          <h2>School Announcements</h2>
          <ul>
            <li>📢 Midterm exams start on <strong>October 25, 2025</strong>.</li>
            <li>🎓 Graduation orientation for 4th year students on <strong>November 5</strong>.</li>
            <li>🏫 No classes on <strong>October 30</strong> (Teachers’ Day).</li>
          </ul>
        </section>

        <section className="grades-card">
          <h2>Recent Grades</h2>
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ADV101</td>
                <td>92</td>
              </tr>
              <tr>
                <td>CC104</td>
                <td>90</td>
              </tr>
              <tr>
                <td>IPT101</td>
                <td>90</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
     
       <section className="schedule-section">
        <h2>Class Schedule</h2>
        <ul>
          <li>Monday - REED 203 (8:00 AM - 10:00 AM)</li>
          <li>Tuesday - CC 104 (10:00 AM - 12:00 PM)</li>
          <li>Wednesday - IPT 101 (1:00 PM - 3:00 PM)</li>
          <li>Thursday - PE 203 (9:00 AM - 11:00 AM)</li>
          <li>Friday - MS 102 (1:00 PM - 3:00 PM)</li>
        </ul>
      </section>

    </div>
  );
}
