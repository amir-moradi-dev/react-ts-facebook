import classes from "./index.module.css";
import Feed from "../Feed";

function App() {
  return (
    <>
      <div className={classes.appContainer}>
        <Feed />
      </div>
    </>
  );
}

export default App;
