import classes from "./index.module.css";
import { Avatar } from "@mui/material";

type StoryProps = {
  image: string;
  profileSrc: string;
  title: string;
};

function Story(props: StoryProps) {
  const { image, profileSrc, title } = props;
  return (
    <>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={classes.story}
      >
        <Avatar className={classes.storyAvatar} src={profileSrc} />
        <h4>{title}</h4>
      </div>
    </>
  );
}

export default Story;
