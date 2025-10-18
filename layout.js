//layout code
//footer ng sa ubos  2025 Student LMS
//header nato or name kay Student LMS
import "../styles/globals.css";

export const metadata = {
  title: "Advproject",
  description: "A Next.js login, register, and dashboard project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <h1>Student LMS</h1>
        </header>
        <main className="main-content">{children}</main>
       <footer className="footer"> 
          <p>© 2025 Student LMS HCDC. </p>
        </footer>
      </body>
    </html>
  );
}
