//Homepage code
"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home-container">
      <h2>Welcome to Student LMS</h2>
      <p>
        Please choose an option below to continue to your account or create a
        new one.
      </p>
      <div className="buttons">
        <Link href="/login">
          <button className="btn">Login</button>
        </Link>
        <Link href="/register">
          <button className="btn">Register</button>
        </Link>
      </div>
    </div>
  );
}
