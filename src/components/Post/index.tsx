import classes from "./index.module.css";
import { Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";

type PostProps = {
  profilePic: string;
  image: string;
  username: string;
  timestamp: string;
  message: string;
};

function Post(props: PostProps) {
  const { profilePic, image, username, timestamp, message } = props;
  return (
    <>
      <div className={classes.post}>
        <div className={classes.post__top}>
          <Avatar src={profilePic} className={classes.post__avatar} />
          <div className={classes.post__topInfo}>
            <h3>{username}</h3>
            <p>{timestamp}...</p>
          </div>
        </div>

        <div className={classes.post__bottom}>
          <p>{message}</p>
        </div>

        <div className={classes.post__image}>
          <img src={image} alt={""} />
        </div>

        <div className={classes.post__options}>
          <div className={classes.post__option}>
            <ThumbUpIcon />
            <p>Like</p>
          </div>
          <div className={classes.post__option}>
            <ChatBubbleOutlineIcon />
            <p>Comment</p>
          </div>
          <div className={classes.post__option}>
            <NearMeIcon />
            <p>Share</p>
          </div>
          <div className={classes.post__option}>
            <AccountCircleIcon />
            <ExpandMoreOutlinedIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
