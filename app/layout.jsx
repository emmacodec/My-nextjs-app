import styles from "../styles/global.css";
import HomePage from "./page";

import Nav from "@components/nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "AI-Graphics",
  description: "Discover & share AI graphics",
};

const RootLayout = ({ Children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Nav />
          <HomePage />
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">{Children}</main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
