import classes from "./index.module.css";
import StoryReel from "../StoryReel";
import MessageSender from "../MessageSender";
import Post from "../Post";

function Feed() {
  return (
    <>
      <div className={classes.feed}>
        <StoryReel />
        <MessageSender />
        <Post
          profilePic={"https://avatars.githubusercontent.com/u/119784740?v=4"}
          image={"https://wallpapercave.com/wp/wp1828943.jpg"}
          username={"Amir Moradi"}
          timestamp={"Time Stamp"}
          message={"yaai its working..."}
        />
        <Post
          profilePic={"https://avatars.githubusercontent.com/u/119784740?v=4"}
          image={"https://wallpapercave.com/wp/wp1828925.png"}
          username={"Amir Moradi"}
          timestamp={"Time Stamp"}
          message={"yaai its working..."}
        />
        <Post
          profilePic={"https://avatars.githubusercontent.com/u/119784740?v=4"}
          image={"https://wallpapercave.com/wp/wp1828941.png"}
          username={"Amir Moradi"}
          timestamp={"Time Stamp"}
          message={"yaai its working..."}
        />
      </div>
    </>
  );
}

export default Feed;
