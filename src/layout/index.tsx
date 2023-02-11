import classes from './index.module.css'
import Header from "./Header";
import {ReactNode} from "react";

function Layout({children}:{children:ReactNode}) {
    return <>
        <Header />
        <main className={classes.mainContainer}>
            {children}
        </main>
        {/*<Footer />*/}
     </>
}

export default Layout