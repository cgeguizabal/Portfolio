// app/layout.jsx
import "../styles/globals.scss";

export const metadata = {
  title: "Guillermo Eguizabal - Portfolio",
  keywords:
    "portfolio, Guillermo Eguizabal, web developer, software engineer, fullstack developer",
  description:
    "Get to know Guillermo Eguizabal, a web developer with a passion for creating innovative solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
