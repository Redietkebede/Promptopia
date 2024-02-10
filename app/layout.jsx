import "@styles/globals.css";
import { children } from "react";
import NavBar from "@components/NavBar";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & share AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradiant" />
          </div>

          <main className="app">
            <NavBar />

            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
