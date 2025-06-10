export const metadata = {
  title: "Guillermo Eguizabal - Portfolio",
  keywords:
    "portfolio, Guillermo Eguizabal, web developer, software engineer, fullstack developer",
  description:
    "Get to know Guillermo Eguizabal, a web developer with a passion for creating innovative solutions.",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
