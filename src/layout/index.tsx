import classes from "./index.module.css";
import Header from "./Header";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />

      <main className={classes.mainContainer}>
        <Sidebar />
        {children}
      </main>
      {/*<Footer />*/}
    </>
  );
}

export default Layout;
