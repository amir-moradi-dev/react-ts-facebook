import classes from "./index.module.css";
import Story from "../Story";

function StoryReel() {
  return (
    <>
      <div className={classes.storyReel}>
        <Story
          image={"https://wallpapercave.com/dwp2x/wp2126161.jpg"}
          profileSrc={"https://wallpapercave.com/dwp2x/wp2126167.jpg"}
          title={"Mark Zuckerberg"}
        />
        <Story
          image={"https://wallpapercave.com/dwp2x/wp2126161.jpg"}
          profileSrc={"https://wallpapercave.com/dwp2x/wp2126167.jpg"}
          title={"Elon Musk"}
        />
        <Story
          image={"https://wallpapercave.com/dwp2x/wp2126161.jpg"}
          profileSrc={"https://wallpapercave.com/dwp2x/wp2126167.jpg"}
          title={"Bill Gates"}
        />
        <Story
          image={"https://wallpapercave.com/dwp2x/wp2126161.jpg"}
          profileSrc={"https://wallpapercave.com/dwp2x/wp2126167.jpg"}
          title={"Larry Ellison"}
        />
        <Story
          image={"https://wallpapercave.com/dwp2x/wp2126161.jpg"}
          profileSrc={"https://wallpapercave.com/dwp2x/wp2126167.jpg"}
          title={"Warren Buffet"}
        />
      </div>
    </>
  );
}

export default StoryReel;
