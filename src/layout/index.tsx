import classes from "./index.module.css";
import Header from "./Header";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Login from "../components/Login";

function Layout({ children }: { children: ReactNode }) {
  const user = null;
  if (!user)
    return (
      <>
        <Login />
      </>
    );
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
