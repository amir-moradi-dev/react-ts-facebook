import classes from "./index.module.css";
import StoryReel from "../StoryReel";
import MessageSender from "../MessageSender";

function Feed() {
  return (
    <>
      <div className={classes.feed}>
        <StoryReel />
        <MessageSender />
      </div>
    </>
  );
}

export default Feed;
